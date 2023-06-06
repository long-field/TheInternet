import Page from "./page.js";

class ModalPage extends Page {

    open() {
        return super.open('ab');
    }
    getClose() {
        return $('#modal .modal-footer p');

    }

}


export default new ModalPage;