(function(){
    var app = angular.module("ContactApp");
    app.service("AppDataServiceSvc", function (AppNameSvc){
        this.name = AppNameSvc;
        this.author = "Ishan";
        this.buildDate = new Date().toDateString();
    });
})();