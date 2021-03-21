export enum Events {
    PLAYER_CONNECT = "server:player_connect",
    // Авторизация
    PLAYER_LOGIN_SUCCESS = "server:player_login_success",
    PLAYER_PENDING_LOGIN = "client:auth:try_login",
    PLAYER_PENDING_REGISTER = "client:auth:try_register",
    PLAYER_ACCOUNT_ERROR = "server:auth:error",

    // Системные
    SYSTEM_META_SET = "meta:set",
    SYSTEM_META_CHANGED = "meta:changed",


    // View 
    VIEW_SHOW_CHARACTERS_MENU = "view:show_characters_menu",
    VIEW_CHARACTERS_SHOW = "view:characters_show",
};