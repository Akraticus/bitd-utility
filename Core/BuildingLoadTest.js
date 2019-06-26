const Options = require("./DataCarriers/Building.js").BuildingOptions;
const Builder  = require("./Builders/BuildingBuilder.js");


let buildingOptions = new Options();
buildingOptions.detailsAmount = 3;
buildingOptions.itemsAmount = 2;
let building = Builder.getBuilding(buildingOptions);
console.log(building);