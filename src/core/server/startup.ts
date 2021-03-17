import * as alt from "alt-server";
import fs from "fs";
import env from 'dotenv';
import "reflect-metadata";

import logger from "./utility/logger";
import { LoaderService } from "./services/loader.service";
import { DatabaseService } from "./services/database.service";

env.config();

/**
 * Загрузка всех сервисов
 * 
 */
new LoaderService(new DatabaseService()).bootstrap();



try {
    const result = fs.readFileSync('package.json').toString();
    const data = JSON.parse(result);
    process.env.DM_VERSION = data.version;
    logger.info(`Version: ${data.version}`)
} catch (err) {
    logger.error(`Невозможно проверить версию из package.json.`);
    process.exit(0);
}