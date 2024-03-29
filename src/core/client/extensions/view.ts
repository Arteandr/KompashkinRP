import * as alt from "alt-client";
import * as native from "natives";

const blankURL = `http://resource/client/views/empty/html/index.html`;
let _currentEvents: { eventName: string; callback: any }[] = [];
let _cursorCount: number = 0;
let _isClosing: boolean = false;
let _instance: View;

alt.on('disconnect', async () => {
    (await View.getInstance('', false)).destroy();
});

alt.on('connectionComplete', async () => {
    _instance = await View.getInstance(blankURL, false, true);
});

export class View extends alt.WebView {
    private constructor(url: string, isOverlay: boolean = false) {
        super(url, isOverlay);
        this.isVisible = false;
    }

    static async getInstance(
        url: string,
        addCursor: boolean,
        isInit: boolean = false,
        blurBackground: boolean = false
    ): Promise<View> {
        if (!_instance) {
            _instance = new View(url);

            if (isInit) {
                return _instance;
            }
        }

        _instance.isVisible = false;

        // Wait for View to close.
        if (_isClosing) {
            await new Promise((resolve: Function) => {
                const tmpInterval = alt.setInterval(() => {
                    if (_isClosing) {
                        return;
                    }

                    alt.clearInterval(tmpInterval);
                    resolve();
                }, 5);
            });
        }

        if (blurBackground) {
            native.triggerScreenblurFadeIn(100);
            native.displayRadar(false);
        }

        alt.Player.local.isMenuOpen = true;
        _instance.url = url;
        _instance.showCursor(addCursor);
        _instance.focus();

        // Used to hide the view until it's ready.
        _instance.on('ready', () => {
            _instance.isVisible = true;
        });

        return _instance;
    }


    /**
     * Обработка данных входящих из WebView
     * @param {string} eventName 
     * @param {(...args: any[]) =>void} listener 
     * @returns 
     */
    public on(eventName: string, listener: (...args: any[]) => void) {
        super.on(eventName, listener);

        const index: number = _currentEvents.findIndex((e) => e.eventName === eventName);
        if (index >= 0) return;

        _currentEvents.push({ eventName, callback: listener });
    }

    public emit(eventName: string, ...args: any[]) {
        super.emit(eventName, ...args);
    };


    /**
     * Показывает или скрывает курсор
     * @param {boolean} state 
     */
    public showCursor(state: boolean) {
        if (state) {
            _cursorCount += 1;
            try {
                alt.showCursor(true);
            } catch (err) { }
        } else {
            for (let i = 0; i < _cursorCount; i++) {
                try {
                    alt.showCursor(false);
                } catch (err) { }
            }

            _cursorCount = 0;
        }
    }

    /**
     * Закрывает WebView и отключает все эвенты
     * @param {number} delay 
     */
    public close(delay: number = 0) {
        _isClosing = true;
        this.url = blankURL;
        this.showCursor(false);
        this.unfocus();
        this.isVisible = false;

        alt.Player.local.isMenuOpen = false;
        native.triggerScreenblurFadeOut(100);
        native.displayRadar(true);

        // Turn off currently existing events.
        for (let i = 0; i < _currentEvents.length; i++) {
            const eventData = _currentEvents[i];
            if (eventData.eventName === 'ready') {
                continue;
            }

            super.off(eventData.eventName, eventData.callback);
        }

        _currentEvents = [];
        alt.setTimeout(() => {
            _isClosing = false;
        }, delay);
    }
}