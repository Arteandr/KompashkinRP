import * as alt from "alt-server";
import env from 'dotenv';
import "reflect-metadata";
import { container } from "tsyringe";
import { DatabaseService } from "./services/database.service";
import { LoginService } from "./services/login.service";

env.config();

// Подключение базы данных
const dbInstance = container.resolve(DatabaseService);
dbInstance.connect();

