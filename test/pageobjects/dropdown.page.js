import Page from "./page.js";

class DropDownPage extends Page {

    open() {
        return super.open('ab');
    }
    getdropdown() {
        return $('#dropdown');
    }
    getdropdownOption2() {
        $('#dropdown option:nth-child(2)')
    }
}


export default new DropDownPage;