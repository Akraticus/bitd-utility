const Options = require("./DataCarriers/Building.js").BuildingOptions;
const Builder  = require("./Builders/Building/BuildingBuilder.js");
const DataFetcher = require("./Builders/Building/BuildingDataFetcher.js");

let buildingData = DataFetcher.getBuildingData();
let buildingOptions = new Options();
buildingOptions.detailsAmount = 3;
buildingOptions.itemsAmount = 2;

let building = Builder.getBuilding(buildingData, buildingOptions);
console.log(building);