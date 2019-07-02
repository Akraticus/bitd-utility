const Options = require("../../Core/Entities/Building/Building.js").BuildingOptions;
const Builder  = require("../../Core/Entities/Building/BuildingBuilder.js");
const DataFetcher = require("../../Core/Entities/Building/BuildingDataFetcher.js");

test("Test local building construction", () => {
    let buildingData = DataFetcher();
    let buildingOptions = new Options();
    buildingOptions.detailsAmount = 3;
    buildingOptions.itemsAmount = 2;
    
    let building = Builder.getBuilding(buildingData, buildingOptions);
    expect(building).toBeDefined();
});
