"use strict";
class LoginStrategy {
}
class UIAutoLogin extends LoginStrategy {
    async login() {
        console.log("Login via UI");
    }
}
class APILogin extends LoginStrategy {
    async login() {
        console.log("Login via API");
    }
}
// let login: LoginStrategy = new APILogin();
let login = new UIAutoLogin();
login.login(); // "Login via API" — but the calling code never needed to know that
