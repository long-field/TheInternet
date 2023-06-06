import TestSuite from "./test.suite.js";
import HomePage from "../pageobjects/home.page.js"
import homePage from "../pageobjects/home.page.js";
import abPage from "../pageobjects/abpage.page.js";
import adremovePage from "../pageobjects/adremove.page.js";
import brokenimagePage from "../pageobjects/brokenimage.page.js";
import domPage from "../pageobjects/dom.page.js";
import checkboxPage from "../pageobjects/checkbox.page.js";
import contexmenuPage from "../pageobjects/contexmenu.page.js";
import loginPage from "../pageobjects/login.page.js";
import dropdownPage from "../pageobjects/dropdown.page.js";
import KeysPage from "../pageobjects/keys.page.js";
import modalPage from "../pageobjects/modal.page.js";


class InternetSuite extends TestSuite{

    navigateToPage() {
        this.addTest(() => {
            it('should navigate to base url', async () => {
                await browser.url("https://the-internet.herokuapp.com");
            });
        });
        return this;
    }
    ABTest() {
        this.addTest(() => {
            it('ABPAGE', async () => {
                await homePage.getabTesting().click()
               await expect(abPage.getcontentDiv()).toBeDisplayed()
                await browser.url("https://the-internet.herokuapp.com");
            });
        });
        return this;
    }
    ADDREMOVE() {
        this.addTest(() => {
            it('ADREMOVEPAGE', async () => {
                await homePage.getaddRemoveElements().click();
                await adremovePage.getaddElementButton().click();
                await expect(adremovePage.getdeleteElementButton()).toBeDisplayed()
                await browser.url("https://the-internet.herokuapp.com");
            });
        });
        return this;
    }
    BASICAUTH() {
        this.addTest(() => {
            it('BASICAUTH', async () => {
                await browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth");
            });
        });
        return this;
    }

    BrokenImage() {
        this.addTest(() => {
            it('brokenimage', async () => {
                await browser.url("https://the-internet.herokuapp.com/broken_images");
                await expect(brokenimagePage.getfirstImage()).toBeExisting();
                const naturalWidth = await brokenimagePage.getfirstImage().getAttribute('Width');
                await expect(naturalWidth).toBeGreaterThan(0)
            });
        });
        return this;
    }

    DOM() {
        this.addTest(() => {
            it('DOMCHALLENGING', async () => {
                await browser.url("https://the-internet.herokuapp.com/challenging_dom");
                await expect(domPage.getfirstA()).toBeClickable();

            });
        });
        return this;
    }


    Checkboxes() {
        this.addTest(() => {
            it('checkbox', async () => {
                await browser.url("https://the-internet.herokuapp.com/checkboxes");
                await expect(checkboxPage.getcheckbox2()).toBeChecked();

            });
        });
        return this;
    }
    ContextRight() {
        this.addTest(() => {
            it('context', async () => {
                await browser.url("https://the-internet.herokuapp.com/context_menu");
                const element = contexmenuPage.getcontext()

                await browser.performActions([
                    {
                        type: "pointer",
                        id: "mouse",
                        parameters: { pointerType: "mouse" },
                        actions: [
                            { type: "pointerMove", origin: element, x: 0, y: 0  },
                            { type: "pointerDown", button: 2},
                            { type: "pointerUp", button: 2 },
                        ],
                    },
                ]);
                await browser.pause(6000)
                await browser.pause(6000)
                await browser.pause(6000)
            });
        });
        return this;
    }


    Login() {
        this.addTest(() => {
            it('LOGIN', async () => {
                await browser.url("https://the-internet.herokuapp.com/login");
               await loginPage.getUsername().setValue("tomsmith");await loginPage.getPassword().setValue("SuperSecretPassword!");
             await loginPage.getBtn().click();
                await expect(browser).toHaveUrlContaining("secure");


            });
        });
        return this;
    }
    Dropdown() {
        this.addTest(() => {
            it('DropDown', async () => {
                await browser.url("https://the-internet.herokuapp.com/dropdown");
                await dropdownPage.getdropdown().selectByAttribute('value', '1');
                await dropdownPage.getdropdown().selectByAttribute('selected','selected');
            });
        });
        return this;
    }
    Keys() {
        this.addTest(() => {
            it('Keys', async () => {
                await browser.url("https://the-internet.herokuapp.com/key_presses");
                await KeysPage.gettarget().click()
                await browser.keys("\uE00D");
                await expect(KeysPage.getresult()).toHaveText("You entered: SPACE")
            });
        });
        return this;
    }
    Modal() {
        this.addTest(() => {
            it('Modal', async () => {
                await browser.url("https://the-internet.herokuapp.com/entry_ad");
                await browser.execute(() => {
                    const modal = document.getElementById('modal');
                    modal.style.display = 'none';
                });
                await browser.refresh()
                await browser.pause(6000)
            });


        });
        return this;
    }





}
export default new InternetSuite()