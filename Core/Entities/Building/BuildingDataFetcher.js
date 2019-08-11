const FsUtil = require("../../Utilities/FsUtility.js");
const Loader = require("../../Utilities/WeightedCollectionLoader.js");
const BuildingData = require("../Building/BuildingData.js");
const TreeBuilder = require("../../Tree Node/TreeBuilder.js");


let defaultDirectory = "Core/Data/Building/";

function getBuildingData(params){
    var buildingData = new BuildingData();

    var exterior_details_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "exterior_details.json");
    buildingData.exterior_details = TreeBuilder.createRootFromCollection(Loader.getCollection(exterior_details_jsonString));

    var exterior_materials_data = FsUtil.getFromFileSystemSync(defaultDirectory, "exterior_materials.json"); 
    buildingData.exterior_materials = TreeBuilder.createRootFromCollection(Loader.getCollection(exterior_materials_data));
    
    var uses_common_data = FsUtil.getFromFileSystemSync(defaultDirectory, "uses_common.json"); 
    buildingData.uses_common = TreeBuilder.createRootFromCollection(Loader.getCollection(uses_common_data));

    var uses_rare_data = FsUtil.getFromFileSystemSync(defaultDirectory, "uses_rare.json"); 
    buildingData.uses_rare = TreeBuilder.createRootFromCollection(Loader.getCollection(uses_rare_data));

    var items_data = FsUtil.getFromFileSystemSync(defaultDirectory, "items.json"); 
    buildingData.items = TreeBuilder.createRootFromCollection(Loader.getCollection(items_data));

    return buildingData;
}

module.exports = getBuildingData;