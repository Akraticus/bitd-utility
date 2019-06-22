const Entities = require("./Entities.js");
const StreetBuilder = require("./StreetBuilder.js");

exports.getDefaultStreet = function getDefaultStreet(){
    return new Entities.Street();
}

exports.getStreet = function getStreet(streetOptions){
    streetOptions = streetOptions === undefined ? new Entities.StreetOptions() : streetOptions;
    return StreetBuilder.getStreet(streetOptions);
}

exports.getDefaultBuilding = function getDefaultBuilding(){
    return new Entities.Building();
}

exports.getDefaultPerson = function getDefaultPerson(){
    return new Entities.Person();
}

exports.getDefaultDevil = function getDefaultDevil(){
    return new Entities.Devil();
}

exports.getDefaultForgottenGod = function getDefaultForgottenGod(){
    return new Entities.ForgottenGod();
}

exports.getDefaultScore = function getDefaultScore(){
    return new Entities.Score();
}

