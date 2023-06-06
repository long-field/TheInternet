import Page from "./page.js";

class ContextPage extends Page {

    open() {
        return super.open('ab');
    }
    getcontext() {
        return $('#hot-spot');
    }


}

export default new ContextPage;