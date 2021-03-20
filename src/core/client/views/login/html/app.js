Vue.config.devtools = true;
Vue.prototype.window = window;

const app = new Vue({
    el: '#app',
    data() {
        return {
            show: false,
            registering: false,
            processing: false,
            login: '',
            password: '',
            rPassword: '',
            rPassword2: '',
            error: {
                login: null,
                password: null,
                rPassword: null,
                rPassword2: null,
            }

        };
    },
    methods: {
        toggleMode() {
            this.error.login = null;
            this.error.password = null;
            this.error.rPassword = null;
            this.error.rPassword2 = null;
            this.registering = !this.registering
        },
        setError(target, error) {
            this.processing = false;

            switch (target) {
                case "login":
                    this.error.login = error;
                    break;
                case "password":
                    this.error.password = error;
                    break;
                case "rPassword":
                    this.error.rPassword = error;
                    break;
                case "rPassword2":
                    this.error.rPassword2 = error;
                    break;
            }
        },
        processRegistration(register = false) {
            this.errorMessage = false
            this.processing = true

            if (this.login.length < 3) {
                this.setError("login", "Минимум 3 символа.")
            }

            if (register) {
                if (this.rPassword.length < 6) {
                    this.setError("rPassword", "Минимум 6 символов.")
                }
                if (this.rPassword !== this.rPassword2) {
                    this.setError("rPassword2", "Пароли не совпадают.")
                }
            } else {
                if (this.password.length < 6) {
                    this.setError("password", "Минимум 6 символов.")
                }
            }

            if ("alt" in window) {
                if (this.registering) {
                    alt.emit("try_register", this.login, this.rPassword)
                    return
                }

                alt.emit("try_login", this.login, this.password)
            }
        },
        serverError(msg) {
            this.setError("login", msg);
        }
    },
    mounted() {
        this.$nextTick(() => {
            if ("alt" in window) {
                alt.on("error", this.serverError);
                alt.emit("ready")
            }
        })
    }

})