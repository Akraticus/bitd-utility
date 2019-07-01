const FileSystem = require("fs");
const Path = require("path");
const Loader = require("../../WeightedCollectionLoader.js");
const BuildingData = require("../Building/BuildingData.js");
const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;


let defaultDirectory = "Core/Data/Building/";

function getBuildingData(params){
    var buildingData = new BuildingData();

    var exterior_details_jsonString = getFromFileSystem("exterior_details.json"); 
    buildingData.exterior_details = Loader.getCollection(exterior_details_jsonString) || new WeightedCollection();

    var exterior_materials_data = getFromFileSystem("exterior_materials.json"); 
    buildingData.exterior_materials = Loader.getCollection(exterior_materials_data) || new WeightedCollection();
    
    var uses_common_data = getFromFileSystem("uses_common.json"); 
    buildingData.uses_common = Loader.getCollection(uses_common_data) || new WeightedCollection();

    var uses_rare_data = getFromFileSystem("uses_rare.json"); 
    buildingData.uses_rare = Loader.getCollection(uses_rare_data) || new WeightedCollection();

    var items_data = getFromFileSystem("items.json"); 
    buildingData.items = Loader.getCollection(items_data) || new WeightedCollection();

    return buildingData;
}

function getFromFileSystem(path){
    var finalPath = Path.join(defaultDirectory, path);

    if(!FileSystem.existsSync(finalPath)) return undefined;
    return FileSystem.readFileSync(finalPath);
}

exports.getBuildingData = getBuildingData;