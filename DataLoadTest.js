const Options = require("./DataCarriers/Entities.js").BuildingOptions;
const Builder  = require("./Builders/BuildingBuilder.js");

let buildingOptions = new Options();
buildingOptions.detailsAmount = 3;
buildingOptions.itemsAmount = 2;
buildingOptions.useType = "RaRE";
let street = Builder.getBuilding(buildingOptions);
console.log(street);