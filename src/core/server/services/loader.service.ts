import { singleton } from "tsyringe";
import logger from "../utility/logger";
import { BaseLoaderService } from "./base-loader.service";
import { DatabaseService } from "./database.service";

@singleton()
export class LoaderService extends BaseLoaderService {
    constructor(
        private readonly databaseService: DatabaseService
    ) {
        super();
    }

    protected startLoading() {
        this.databaseService.connect();
    }

}