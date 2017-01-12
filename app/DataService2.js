var angular = require("angular");

var ModuleName = "DataServiceModule";
var ServiceName = "DataService";

angular.module(ModuleName, []).service(ServiceName, function($http) {
    this.str = "Initial String";
    this.num = 0;

    this.GetNum = function() {
        return this.num;
    };

    this.Add = function() {
        this.num++;
        console.log(this.num);
        return;
    };

    this.GetStr = function() {
        return this.str;
    };

    this.SetStr = function(str) {
        this.str = str;
        return;
    };

});

module.exports = {
    name: ModuleName,
    service: ServiceName
};
