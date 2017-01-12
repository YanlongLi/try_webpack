require('bootstrap-webpack');
import $ from "jquery";
import angular from "angular";
import DataModule from "./DataService2.js";

function InitBody() {
    var div = $("<div></div>").attr("class", "text-success").text("Hello Webpack");
    $("#wrapper").append(div);
}


var app = angular.module("AppTest", [DataModule.name]);
app.controller("AppCtl", ["$scope", DataModule.service, function($scope, Data) {
    $scope.Data = Data;
    $scope.ShowData = function() {
        alert($scope.Data.num + "Hello Succeed");
    };
    InitBody();
}]);

app.controller("DataCtl", ["$scope", DataModule.service, function($scope, Data) {
    $scope.str = Data.GetStr();
    $scope.Add = function() {
        Data.Add();
        return;
    };
    $scope.Change = function() {
        Data.SetStr($scope.str);
        return;
    };
}]);
