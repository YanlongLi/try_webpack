
import angular from "angular";
import $ from "jquery";
import router from "angular-ui-router";
console.log(router);

var app = angular.module("routerApp", [router]);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("default",{
        url: "/index",
        template:"default page"
    });
    $stateProvider.state("name", {
        url: "/name",
        template:"hello ui-router {{id}}",
        controller: ["$scope", function($scope){
            console.log("asfa");
            $scope.id = 1;
        }]
    });
    $urlRouterProvider.otherwise("/index");
});

app.controller("TestCtl", function($scope){
    $scope.name = 10;
    console.log(10);
});
