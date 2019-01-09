var login = require("../Page/login.page.js");
var data = require("../TestData/data.json");



    function loginTheSystem() {
        
        login.email.sendKeys(data.appData.teamMemberEmail);
        login.password.sendKeys(data.appData.teamMemberPassword);
        login.signInButton.click();
    }


module.exports = new loginTheSystem();