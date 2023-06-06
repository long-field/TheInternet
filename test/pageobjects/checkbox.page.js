import Page from "./page.js";

class CheckBoxPage extends Page {

    open() {
        return super.open('ab');
    }
    getcheckbox1() {
        return $('#checkboxes input[type="checkbox"]:nth-of-type(1)');
    }

    getcheckbox2() {
        return $('#checkboxes input[type="checkbox"]:nth-of-type(2)');
    }


}


export default new CheckBoxPage();