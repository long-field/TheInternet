



import Page from "./page.js";

class domPage extends Page {

    open() {
        return super.open('ab');
    }

    getfirstA() {
        return $('.large-2.columns a:nth-of-type(1)');
    }


}


export default new domPage;