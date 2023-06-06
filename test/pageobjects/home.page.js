import Page from "./page.js";

class HomePage extends Page {

    open() {
        return super.open('theinternet');
    }

  getabTesting() {
    return $('ul li:nth-child(1) a');
  }

  getaddRemoveElements() {
    return $('ul li:nth-child(2) a');
  }

  getbasicAuth() {
    return $('ul li:nth-child(3) a');
  }

  getbrokenImages() {
    return $('ul li:nth-child(4) a');
  }

  getchallengingDOM() {
    return $('ul li:nth-child(5) a');
  }

  getcheckboxes() {
    return $('ul li:nth-child(6) a');
  }

  getcontextMenu() {
    return $('ul li:nth-child(7) a');
  }

  getdigestAuth() {
    return $('ul li:nth-child(8) a');
  }

  getdisappearingElements() {
    return $('ul li:nth-child(9) a');
  }

  getdragAndDrop() {
    return $('ul li:nth-child(10) a');
  }

  getdropdown() {
    return $('ul li:nth-child(11) a');
  }

  getdynamicContent() {
    return $('ul li:nth-child(12) a');
  }

  getdynamicControls() {
    return $('ul li:nth-child(13) a');
  }

  getdynamicLoading() {
    return $('ul li:nth-child(14) a');
  }

  getentryAd() {
    return $('ul li:nth-child(15) a');
  }

  getexitIntent() {
    return $('ul li:nth-child(16) a');
  }

  getfileDownload() {
    return $('ul li:nth-child(17) a');
  }

  getfileUpload() {
    return $('ul li:nth-child(18) a');
  }

  getfloatingMenu() {
    return $('ul li:nth-child(19) a');
  }

  getforgotPassword() {
    return $('ul li:nth-child(20) a');
  }

  getformAuthentication() {
    return $('ul li:nth-child(21) a');
  }

  getframes() {
    return $('ul li:nth-child(22) a');
  }

  getgeolocation() {
    return $('ul li:nth-child(23) a');
  }

  gethorizontalSlider() {
    return $('ul li:nth-child(24) a');
  }

  gethovers() {
    return $('ul li:nth-child(25) a');
  }

  getinfiniteScroll() {
    return $('ul li:nth-child(26) a');
  }

  getinputs() {
    return $('ul li:nth-child(27) a');
  }

  getjqueryUIMenus() {
    return $('ul li:nth-child(28) a');
  }

  getjavascriptAlerts() {
    return $('ul li:nth-child(29) a');
  }

  getjavascriptError() {
    return $('ul li:nth-child(30) a');
  }

  getkeyPresses() {
    return $('ul li:nth-child(31) a');
  }

  getlargeDeepDOM() {
    return $('ul li:nth-child(32) a');
  }

  getmultipleWindows() {
    return $('ul li:nth-child(33) a');
  }

  getnestedFrames() {
    return $('ul li:nth-child(34) a');
  }

  getnotificationMessages() {
    return $('ul li:nth-child(35) a');
  }

  getredirectLink() {
    return $('ul li:nth-child(36) a');
  }

  getsecureFileDownload() {
    return $('ul li:nth-child(37) a');
  }

  getshadowDOM() {
    return $('ul li:nth-child(38) a');
  }

  getshiftingContent() {
    return $('ul li:nth-child(39) a');
  }

  getslowResources() {
    return $('ul li:nth-child(40) a');
  }

  getsortableDataTables() {
    return $('ul li:nth-child(41) a');
  }

  getstatusCodes() {
    return $('ul li:nth-child(42) a');
  }

  gettypos() {
    return $('ul li:nth-child(43) a');
  }

  getwysiwygEditor() {
    return $('ul li:nth-child(44) a');
  }
}


export default new HomePage;