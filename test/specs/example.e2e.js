import internetSuite from "../suiteobjects/internet.suite.js";



describe('My Internet', () => {

    internetSuite
        .navigateToPage()
        .ABTest()
        .ADDREMOVE()
        .BASICAUTH()
        .BrokenImage()
        .DOM()
        .Checkboxes()
        //.ContextRight()
        .Login()
        .Dropdown()
        .Keys()
        .Modal()
        .run();

})


