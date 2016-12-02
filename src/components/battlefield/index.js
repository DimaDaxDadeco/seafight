import angular from "angular";
import BattlefieldService from "./BattlefieldService";
import BattlefieldCtrl from "./BattlefieldCtrl";
import BattlefieldTemplate from "./BattlefieldTemplate.html";
import ShipComponent from "./ship";
import "./arrangement";

angular.module("battlefield", [
        "battlefield.arrangement"
    ])
    .config($stateProvider => {
        $stateProvider
            .state("battlefield", {
                url: "/",
                template: BattlefieldTemplate,
                controller: BattlefieldCtrl,
                abstract: true,
                controllerAs: "$ctrl"
            });
    })
    .service("BattlefieldService", BattlefieldService)
    .component("ship", ShipComponent);
