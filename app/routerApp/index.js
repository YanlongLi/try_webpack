import angular from "angular";
import $ from "jquery";
import router from "angular-ui-router";
import bootstrap from "bootstrap-webpack";

var app = angular.module("routerApp", [router]);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "templates/home.html" // relative to root html page
    }).state("home.list", {
        url: "/list",
        templateUrl: "templates/home-list.html",
        controller: function($scope) {
            $scope.dogs = ["Bernese", "Husky", "Goldendoodle"]
        }
    }).state("home.paragraph", {
        url: "/paragraph",
        template: "This is a paragraph"
    });
    $stateProvider.state("about", {
        url: "/about",
        views: {
            "": {
                templateUrl: "templates/about.html"
            },
            "columnOne@about": {
                template: "<input type='text' ng-model='data.message'>",
                controller: ["$scope", "DataSharing", function($scope, DataSharing){
                    $scope.data = DataSharing;
                }]
            },
            "columnTwo@about": {
                templateUrl: "templates/about-data.html",
                controller: "scotchController"
            }
        }
    });
});

app.service("DataSharing", ["$http", function($http) {
    this.message = 'test';
    this.scotches = [{
        name: 'Macallan 12',
        price: 50
    }, {
        name: 'Chivas Regal Royal Salute',
        price: 10000
    }, {
        name: 'Glenfiddich 1937',
        price: 20000
    }];
}]);

app.controller("scotchController", ["$scope", "DataSharing", function($scope, DataSharing) {
    $scope.message = DataSharing.message;
    $scope.scotches = DataSharing.scotches;
    $scope.$watch(function() {
        return DataSharing.message;
    }, function(newVal, oldVal) {
        $scope.message = DataSharing.message;
    });
    $scope.$watch(function() {
        return DataSharing.scotches;
    }, function() {
        $scope.scotches = DataSharing.scotches;
    });
}]);
