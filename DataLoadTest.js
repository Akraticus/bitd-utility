const Options = require("./DataCarriers/Entities.js").BuildingOptions;
const Builder  = require("./Builders/BuildingBuilder.js");

let buildingOptions = new Options();
buildingOptions.detailsAmount = -3;
buildingOptions.propsAmount = -3;
let street = Builder.getBuilding(buildingOptions);
console.log(street);