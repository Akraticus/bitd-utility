const FsUtil = require("../../Utilities/FsUtility.js");
const Loader = require("../../WeightedCollectionLoader.js");
const StreetData = require("../Street/StreetData.js");
const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;


let defaultDirectory = "Core/Data/Street/";

function getStreetData(params){
    var data = new StreetData();

    var moods_data = FsUtil.getFromFileSystemSync(defaultDirectory,"moods.json"); 
    data.moods = Loader.getCollection(moods_data) || new WeightedCollection();

    var sights_data = FsUtil.getFromFileSystemSync(defaultDirectory,"sights.json"); 
    data.sights = Loader.getCollection(sights_data) || new WeightedCollection();

    var sounds_data = FsUtil.getFromFileSystemSync(defaultDirectory,"sounds.json"); 
    data.sounds = Loader.getCollection(sounds_data) || new WeightedCollection();

    var smells_data = FsUtil.getFromFileSystemSync(defaultDirectory,"smells.json"); 
    data.smells = Loader.getCollection(smells_data) || new WeightedCollection();

    var uses_data = FsUtil.getFromFileSystemSync(defaultDirectory,"uses.json"); 
    data.uses = Loader.getCollection(uses_data) || new WeightedCollection();

    var types_data = FsUtil.getFromFileSystemSync(defaultDirectory,"types.json"); 
    data.types = Loader.getCollection(types_data) || new WeightedCollection();

    var details_data = FsUtil.getFromFileSystemSync(defaultDirectory,"details.json"); 
    data.details = Loader.getCollection(details_data) || new WeightedCollection();

    var props_data = FsUtil.getFromFileSystemSync(defaultDirectory,"props.json"); 
    data.props = Loader.getCollection(props_data) || new WeightedCollection();

    return data;
}

module.exports = getStreetData;
// exports.getForgottenGodData = getForgottenGodData;