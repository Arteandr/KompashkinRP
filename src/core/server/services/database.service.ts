import * as sm from "simplymongo";
import { singleton } from "tsyringe";
import logger from "../utility/logger";

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
    public connect(): void {
        if (this.connected || !this.config.collections.length) return;

        new sm.Database(this.config.mongoURL, this.config.dbName, this.config.collections);
        sm.onReady((e) => {
            if (e) return logger.error(e);
            logger.passed(`База данных успешно подключена`)
        })
    }

}