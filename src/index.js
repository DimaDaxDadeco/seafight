import angular from "angular";
// import "./components";
import "angular-ui-router";
console.log("check");
angular
    .module("SeaFight", [
        "ui.router"
    ]).config($locationProvider => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });