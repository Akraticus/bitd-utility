const Building = require("./Building.js");

/** Builds a Building data-object based on the provided data and options. If no options are provided, defaults are used. */
exports.getBuilding = function getStreet(buildingData, buildingOptions){
    if(buildingData === undefined) return;
    
    // undefined => load defaults
    buildingOptions = buildingOptions || new Building.BuildingOptions();
    buildingOptions.detailsAmount = buildingOptions.detailsAmount === undefined || buildingOptions.detailsAmount < 0 ? 0 : buildingOptions.detailsAmount;
    buildingOptions.itemsAmount = buildingOptions.itemsAmount === undefined || buildingOptions.itemsAmount < 0 ? 0 : buildingOptions.itemsAmount;
    buildingOptions.materialsAmount = buildingOptions.materialsAmount === undefined || buildingOptions.materialsAmount < 0 ? 0 : buildingOptions.materialsAmount;
    
    // instantiate return value
    let building = new Building.Building();

    // USE
    if(buildingOptions.useType && buildingOptions.useType.toLowerCase() === "rare"){
        building.use = buildingData.uses_rare.getRandomLeafNode().data;
    }

    // rare type wasn't hit, or the rare-list was empty
    if(!building.use){
        building.use = buildingData.uses_common.getRandomLeafNode().data;
    }

    // EXTERIOR DETAILS    
    for(var i = 0; i < buildingOptions.detailsAmount; i++){
        let detail = buildingData.exterior_details.getRandomLeafNode(...building.exterior.details);
        if(!detail) break;  // no more details left in collection

        building.exterior.details.push(detail);
    }
    // convert nodes to their inner values
    building.exterior.details = building.exterior.details.map(v => v.data);

    // EXTERIOR MATERIAL
    for(var i = 0; i < buildingOptions.materialsAmount; i++){
        let material = buildingData.exterior_materials.getRandomLeafNode(...building.exterior.materials);
        if(!material) break;

        building.exterior.materials.push(material);
    }
    // convert nodes to their inner values
    building.exterior.materials = building.exterior.materials.map(v => v.data);

    // ITEMS
    for(var i = 0; i < buildingOptions.itemsAmount; i++){
        let item = buildingData.items.getRandomLeafNode(...building.items);
        if(!item) break;    // no more details left in collection

        building.items.push(item);
    }
    // convert nodes to their inner values
    building.items = building.items.map(v => v.data);

    return building;
}