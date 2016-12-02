import angular from "angular";
import LettersGeneratorFactory from "./letters-generator/LettersGeneratorFactory";

angular
    .module("services", [])
    .factory("lettersGenerator", LettersGeneratorFactory);