import Page from "./page.js";

class LoginPage extends Page {

    open() {
        return super.open('ab');
    }
    getUsername() {
        return $('#username');
    }

    getPassword() {
        return $('#password');
    }


    getBtn() {
        return $('button.radius[type="submit"]')
    }

    getFlash(){
        return $('#flash-messages');
    }
}


export default new LoginPage;