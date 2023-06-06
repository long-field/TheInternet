import Page from "./page.js";

class AdremovePage extends Page {

    open() {
        return super.open('ab');
    }
    getaddElementButton() {
        return $('button[onclick="addElement()"]');
    }

    getdeleteElementButton() {
        return $('button.added-manually[onclick="deleteElement()"]');
    }


}


export default new AdremovePage ;