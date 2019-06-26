const Building = require("../DataCarriers/Building.js");
const Loader = require("../WeightedCollectionLoader.js");

/** Builds a Building data-object based on the provided options. If no options are provided, defaults are used. */
exports.getBuilding = function getStreet(buildingOptions){
    // undefined => load defaults
    buildingOptions = buildingOptions === undefined ? new Building.BuildingOptions() : buildingOptions;

    Loader.setDirectory("Data/Building");
    let exterior_details = Loader.getCollection("exterior_details.json");
    let exterior_materials = Loader.getCollection("exterior_materials.json");
    let uses_common = Loader.getCollection("uses_common.json");
    let uses_rare = Loader.getCollection("uses_rare.json");
    let items = Loader.getCollection("items.json");

    let building = new Building.Building();

    // USE
    if(buildingOptions.useType.toLowerCase() === "rare"){
        building.use = uses_rare.spliceRandomElement().value;
    }
    else {
        building.use = uses_common.spliceRandomElement().value;
    }
    

    // EXTERIOR DETAILS
    // Undefined || <0 => set to 0
    buildingOptions.detailsAmount = buildingOptions.detailsAmount === undefined || buildingOptions.detailsAmount < 0 ? 0 : buildingOptions.detailsAmount;
    for(var i = 0; i < buildingOptions.detailsAmount; i++){
        building.exterior.details.push(exterior_details.spliceRandomElement().value);
    }

    // EXTERIOR MATERIAL
    building.exterior.material = exterior_materials.spliceRandomElement().value;

    // ITEMS
    // Undefined || <0 => set to 0
    buildingOptions.itemsAmount = buildingOptions.itemsAmount === undefined || buildingOptions.itemsAmount < 0 ? 0 : buildingOptions.itemsAmount;
    for(var i = 0; i < buildingOptions.itemsAmount; i++){
        building.items.push(items.spliceRandomElement().value);
    }

    return building;
}