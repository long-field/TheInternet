import Page from "./page.js";

class brokenimagePage extends Page {

    open() {
        return super.open('ab');
    }
    getfirstImage() {
        return $('#content.large-12.columns img:nth-of-type(1)');
    }


}


export default new brokenimagePage ;