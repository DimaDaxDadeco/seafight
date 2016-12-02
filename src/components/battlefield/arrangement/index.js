import angular from "angular";
import template from "./ArrangementTemplate.html";
import headerFieldComponent from "./components/header";
import rowFieldComponent from "./components/row";
import cellFieldComponent from "./components/cell";
import dockComponent from "./components/dock";
import controller from "./ArrangementCtrl";

angular.module("battlefield.arrangement", [])
    .config($stateProvider => {
        $stateProvider
            .state("battlefield.arrangement", {
                url: "",
                template,
                controller,
                controllerAs: "$ctrl",
                params: {
                    rowIndex: "",
                    columnIndex: ""
                }
            });
    })
    .component("headerField", headerFieldComponent)
    .component("cellField", cellFieldComponent)
    .component("rowField", rowFieldComponent)
    .component("dock", dockComponent);