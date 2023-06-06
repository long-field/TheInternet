import Page from "./page.js";

class KeysPage extends Page {

    open() {
        return super.open('ab');
    }
    gettarget() {
        return $('#target');

    }
    getresult() {
        return $('#result');

    }

}


export default new KeysPage;