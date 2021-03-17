import { singleton } from "tsyringe";

@singleton()
export class BaseLoaderService {

    /**
     * Запуск сервисов загрузки
     * 
     * @protected
     * @returns {void}
     */
    protected startLoading(): void { }

    public bootstrap(): BaseLoaderService {
        this.startLoading();
        return this;
    }
}