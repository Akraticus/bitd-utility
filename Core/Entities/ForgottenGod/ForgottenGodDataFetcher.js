const FsUtil = require("../../Utilities/FsUtility.js");
const Loader = require("../../WeightedCollectionLoader.js");
const ForgottenGodData = require("../ForgottenGod/ForgottenGodData.js");
const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;


const defaultDirectory = "Core/Data/Forgotten God/";
const subDirectory = "Cult Practices"

function getForgottenGodData(params){
    var data = new ForgottenGodData();

    var names_data = FsUtil.getFromFileSystemSync(defaultDirectory, "names.json"); 
    data.names = Loader.getCollection(names_data) || new WeightedCollection();

    var acquisitions_data = FsUtil.getFromFileSystemSync(defaultDirectory, subDirectory, "acquisition_practices.json"); 
    data.acquisitions = Loader.getCollection(acquisitions_data) || new WeightedCollection();
    
    var consecrations_data = FsUtil.getFromFileSystemSync(defaultDirectory, subDirectory,"consecration_practices.json"); 
    data.consecrations = Loader.getCollection(consecrations_data) || new WeightedCollection();

    var desecrations_data = FsUtil.getFromFileSystemSync(defaultDirectory, subDirectory,"congregation_practices.json"); 
    data.congregations = Loader.getCollection(desecrations_data) || new WeightedCollection();

    var desecrations_data = FsUtil.getFromFileSystemSync(defaultDirectory, subDirectory,"desecration_practices.json"); 
    data.desecrations = Loader.getCollection(desecrations_data) || new WeightedCollection();

    var destructions_data = FsUtil.getFromFileSystemSync(defaultDirectory, subDirectory,"destruction_practices.json"); 
    data.destructions = Loader.getCollection(destructions_data) || new WeightedCollection();

    var sacrifices_data = FsUtil.getFromFileSystemSync(defaultDirectory, subDirectory,"sacrifice_practices.json"); 
    data.sacrifices = Loader.getCollection(sacrifices_data) || new WeightedCollection();

    return data;
}

function getFromFileSystem(path, relativePath){
    relativePath =  relativePath ? Path.join(defaultDirectory, relativePath) : defaultDirectory;

    var finalPath = Path.join(relativePath, path);

    if(!FileSystem.existsSync(finalPath)) return undefined;
    return FileSystem.readFileSync(finalPath);
}

module.exports = getForgottenGodData;