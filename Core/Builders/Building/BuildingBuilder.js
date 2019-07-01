const Building = require("../../DataCarriers/Building.js");

/** Builds a Building data-object based on the provided data and options. If no options are provided, defaults are used. */
exports.getBuilding = function getStreet(buildingData, buildingOptions){
    if(buildingData === undefined) return;
    
    // undefined => load defaults
    buildingOptions = buildingOptions === undefined ? new Building.BuildingOptions() : buildingOptions;
    let building = new Building.Building();

    // USE
    if(buildingOptions.useType.toLowerCase() === "rare" && buildingData.uses_rare.length > 0){
        building.use = buildingData.uses_rare.spliceRandomElement().value;
    }
    else if(buildingData.uses_common.length > 0) {
        building.use = buildingData.uses_common.spliceRandomElement().value;
    }

    // EXTERIOR DETAILS
    // Undefined || <0 => set to 0
    buildingOptions.detailsAmount = buildingOptions.detailsAmount === undefined || buildingOptions.detailsAmount < 0 ? 0 : buildingOptions.detailsAmount;
    for(var i = 0; i < buildingOptions.detailsAmount; i++){
        if(buildingData.exterior_details.length <= 0) break;
        building.exterior.details.push(buildingData.exterior_details.spliceRandomElement().value);
    }

    // EXTERIOR MATERIAL
    if(buildingData.exterior_materials.length > 0){
        building.exterior.material = buildingData.exterior_materials.spliceRandomElement().value;
    };

    // ITEMS
    // Undefined || <0 => set to 0
    buildingOptions.itemsAmount = buildingOptions.itemsAmount === undefined || buildingOptions.itemsAmount < 0 ? 0 : buildingOptions.itemsAmount;
    for(var i = 0; i < buildingOptions.itemsAmount; i++){
        if(buildingData.items.length <= 0) break;
        building.items.push(buildingData.items.spliceRandomElement().value);
    }

    return building;
}