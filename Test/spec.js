var data = require("../TestData/data.json");
var home = require("../Page/home.page.js");
var reservation = require("../Page/hunt.page.js");
var login = require("../Page/login.page.js")
var book = require("../Page/book.page.js");
var confirm = require("../Page/confirmation.page.js");
var bookingStatus = require("../Page/bookingStatus.page.js");


describe("Regresion Suite", () => {

    browser.manage().timeouts().implicitlyWait(4000);
    beforeAll(() => {

        browser.get(data.appData.url);
        
    })

    it("should verify the title", () => {
        var title = browser.getTitle();
        expect(title).toEqual(data.appData.title);
    })

    it("should successfully logIn", () => {
        login.email.sendKeys(data.appData.teamMemberEmail);
        login.password.sendKeys(data.appData.teamMemberPassword);
        login.signInButton.click();

        home.VAtitleText.getText().then(x => {
            expect(x).toEqual(data.reservation.VAtitle);
            
        })

    })

    it("should be able to click hunt link", () => {
        home.huntOption.click();

        
        reservation.huntForSpot.getText().then(x => {
            expect(data.reservation.huntForSpotTitle).toEqual(x);
        })
    })

    it("should be able to enter the valid dates and see the options available", () => {
        reservation.dateOption.sendKeys(data.reservation.date);
        reservation.fromOption.click();
        reservation.dateOptions.get(4).click();
        reservation.toOption.click();
        reservation.toOptions.get(3).click();
        reservation.searchButton.click();

        book.FreeSpotTitle.getText().then(x => {
            expect(x).toEqual(data.reservation.freeSpotsTitle);
        })
    })








})