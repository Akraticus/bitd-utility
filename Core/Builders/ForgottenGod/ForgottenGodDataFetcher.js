const FileSystem = require("fs");
const Path = require("path");
const Loader = require("../../WeightedCollectionLoader.js");
const ForgottenGodData = require("../ForgottenGod/ForgottenGodData.js");
const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;


let defaultDirectory = "Core/Data/Forgotten God/";

function getForgottenGodData(params){
    var data = new ForgottenGodData();

    var names_data = getFromFileSystem("names.json"); 
    data.names = Loader.getCollection(names_data) || new WeightedCollection();

    var acquisitions_data = getFromFileSystem("acquisition_practices.json", "Cult Practices"); 
    data.acquisitions = Loader.getCollection(acquisitions_data) || new WeightedCollection();
    
    var consecrations_data = getFromFileSystem("consecration_practices.json", "Cult Practices"); 
    data.consecrations = Loader.getCollection(consecrations_data) || new WeightedCollection();

    var desecrations_data = getFromFileSystem("congregation_practices.json", "Cult Practices"); 
    data.congregations = Loader.getCollection(desecrations_data) || new WeightedCollection();

    var desecrations_data = getFromFileSystem("desecration_practices.json", "Cult Practices"); 
    data.desecrations = Loader.getCollection(desecrations_data) || new WeightedCollection();

    var destructions_data = getFromFileSystem("destruction_practices.json", "Cult Practices"); 
    data.destructions = Loader.getCollection(destructions_data) || new WeightedCollection();

    var sacrifices_data = getFromFileSystem("sacrifice_practices.json", "Cult Practices"); 
    data.sacrifices = Loader.getCollection(sacrifices_data) || new WeightedCollection();

    return data;
}

function getFromFileSystem(path, root){
    root = root || defaultDirectory;

    var finalPath = Path.join(root, path);

    if(!FileSystem.existsSync(finalPath)) return undefined;
    return FileSystem.readFileSync(finalPath);
}

exports.getForgottenGodData = getForgottenGodData;