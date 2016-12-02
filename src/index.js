import angular from "angular";
import "./components";
import "angular-ui-router";
angular
    .module("SeaFight", [
        "ui.router",
        "battlefield"
    ]).config($locationProvider => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });