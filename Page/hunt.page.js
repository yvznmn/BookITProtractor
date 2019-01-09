var reservation = function() {

    this.huntForSpot = $("h1.title");
    this.dateOption = element(by.id("mat-input-0"));
    this.fromOption = $(".mat-select-placeholder.ng-tns-c18-2.ng-star-inserted");
    this.toOption = $(".mat-select-placeholder.ng-tns-c18-4.ng-star-inserted");
    this.searchButton = $(".mat-icon.material-icons");
    this.dateOptions = $$("span.mat-option-text");
    this.toOptions = $$("#cdk-overlay-1 span.mat-option-text");
}

module.exports = new reservation();