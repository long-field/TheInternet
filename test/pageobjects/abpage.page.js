import Page from "./page.js";

class ABPage extends Page {

    open() {
        return super.open('ab');
    }
  getcontentDiv() {
    return $('#content');
  }


}


export default new ABPage;