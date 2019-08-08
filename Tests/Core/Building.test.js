const Options = require("../../Core/Entities/Building/Building.js").BuildingOptions;
const Builder  = require("../../Core/Entities/Building/BuildingBuilder.js");
const DataFetcher = require("../../Core/Entities/Building/BuildingDataFetcher.js");

test("No options building construction", () => {
    let buildingData = DataFetcher();    
    let building = Builder.getBuilding(buildingData);
    expect(building).toBeDefined();
    expect(building.items.length).toBe(0);   // default is 0
    expect(building.use).toBeDefined();
});

test("Item count equal 3.", () => {
    let buildingData = DataFetcher();
    let buildingOptions = new Options();
    buildingOptions.itemsAmount = 3;
    
    let building = Builder.getBuilding(buildingData, buildingOptions);
    expect(building).toBeDefined();
    expect(building.items.length).toEqual(3);
});

test("Details count equal 4.", () => {
    let buildingData = DataFetcher();
    let buildingOptions = new Options();
    buildingOptions.detailsAmount = 4;
    
    let building = Builder.getBuilding(buildingData, buildingOptions);
    expect(building).toBeDefined();
    expect(building.exterior.details.length).toEqual(4);
});

test("Materials count equal 2", () => {
    let buildingData = DataFetcher();
    let buildingOptions = new Options();
    buildingOptions.materialsAmount = 2;
    
    let building = Builder.getBuilding(buildingData, buildingOptions);
    expect(building).toBeDefined();
    expect(building.exterior.materials.length).toEqual(2);
});