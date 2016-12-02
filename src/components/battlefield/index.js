import angular from "angular";
import BattlefieldService from "./BattlefieldService";
import BattlefieldCtrl from "./BattlefieldCtrl";
import BattlefieldTemplate from "./BattlefieldTemplate.html";

angular.module("battlefield", [])
    .config($stateProvider => {
        $stateProvider
            .state("battlefield", {
                url: "/",
                template: BattlefieldTemplate,
                controller: BattlefieldCtrl,
                controllerAs: "$ctrl"
            });
    })
    .service("TableService", BattlefieldService);
