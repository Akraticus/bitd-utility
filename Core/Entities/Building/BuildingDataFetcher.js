const FsUtil = require("../../Utilities/FsUtility.js");
const Loader = require("../../Utilities/WeightedCollectionLoader.js");
const BuildingData = require("../Building/BuildingData.js");
const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;


let defaultDirectory = "Core/Data/Building/";

function getBuildingData(params){
    var buildingData = new BuildingData();

    var exterior_details_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "exterior_details.json"); 
    buildingData.exterior_details = Loader.getCollection(exterior_details_jsonString) || new WeightedCollection();

    var exterior_materials_data = FsUtil.getFromFileSystemSync(defaultDirectory, "exterior_materials.json"); 
    buildingData.exterior_materials = Loader.getCollection(exterior_materials_data) || new WeightedCollection();
    
    var uses_common_data = FsUtil.getFromFileSystemSync(defaultDirectory, "uses_common.json"); 
    buildingData.uses_common = Loader.getCollection(uses_common_data) || new WeightedCollection();

    var uses_rare_data = FsUtil.getFromFileSystemSync(defaultDirectory, "uses_rare.json"); 
    buildingData.uses_rare = Loader.getCollection(uses_rare_data) || new WeightedCollection();

    var items_data = FsUtil.getFromFileSystemSync(defaultDirectory, "items.json"); 
    buildingData.items = Loader.getCollection(items_data) || new WeightedCollection();

    return buildingData;
}

module.exports = getBuildingData;