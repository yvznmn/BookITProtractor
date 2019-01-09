var loginPage = function() {

    this.email = element(by.name("email"));
    this.password = element(by.name("password"));
    this.signInButton = element(by.xpath("//button[@type = 'submit']"));
    
}

module.exports = new loginPage();