export enum Events {
    PLAYER_CONNECT = "server:player_connect",
    // Авторизация
    PLAYER_LOGIN_SUCCESS = "server:player_login_success",
    PLAYER_PENDING_LOGIN = "client:auth:try_login",
    PLAYER_PENDING_REGISTER = "client:auth:try_register",
    PLAYER_ACCOUNT_ERROR = "server:auth:error",
};