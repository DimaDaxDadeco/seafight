import angular from "angular";
import "./components";
import "angular-ui-router";

angular
    .module("SeaFight", [
        "ui.router",
        "battlefield",
        "services"
    ]).config($locationProvider => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .run(() => {
        if (!localStorage.field) {
            let sizeField = 10;
            const field = [];
            while (sizeField--) {
                field.push("");
            }
            localStorage.field = JSON.stringify(field);
        }
    });