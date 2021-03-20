import { singleton } from "tsyringe";


@singleton()
export default class LoaderService {
    /**
     * Загрузка всех модулей
     */
    public async loadAll(): Promise<void> {
        await this.loadEvents();
    }

    /**
     * Загрузка всех эвентов
     * @return {void}
     */
    private async loadEvents(): Promise<void> {
        import("../events/playerConnect");
        import("../events/auth");
    }

    /**
     * Загрузка всех сервисов
     * @returns {void}
     */
    private loadServices(): void {

    }
}