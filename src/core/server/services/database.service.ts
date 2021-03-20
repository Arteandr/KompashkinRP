import * as sm from "simplymongo";
import { container, singleton } from "tsyringe";
import logger from "../utility/logger";
import LoaderService from "./loader.service";

@singleton()
export class DatabaseService {
    /**
     * Базовая конфигурация
     * 
     * @private
     */
    private config = {
        mongoURL: "mongodb://localhost:27017",
        dbName: "RP",
        collections: [
            'accounts',
            'characters',
        ]
    };

    /**
     * Состояние подключения
     * 
     * @private
     */
    private connected: boolean = false;

    /**
     * Подключение базы данных
     * 
     * @returns {void}
     */
    public async connect(): Promise<void> {
        if (this.connected || !this.config.collections.length) return;

        sm.onReady(this.handlerReady);

        new sm.Database(this.config.mongoURL, this.config.dbName, this.config.collections);
    }

    /**
     * Обработка подключения
     * 
     * @param {any} err
     * @private
     * @returns {void}
     */
    private async handlerReady(err: any): Promise<void> {
        if (err) return logger.error(`Ошибка при подключении к базе данных: ${err}`);
        this.connected = true;
        logger.passed(`База данных успешно подключена!`);
        const loader = container.resolve(LoaderService);
        await loader.loadAll();
    }
}