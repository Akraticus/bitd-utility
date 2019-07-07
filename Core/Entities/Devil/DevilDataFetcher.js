const FsUtil = require("../../Utilities/FsUtility.js");
const Loader = require("../../Utilities/WeightedCollectionLoader.js");
const DevilData = require("../Devil/DevilData.js");
const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;


let defaultDirectory = "Core/Data/Devil/";

function getDevilData(){
    var devilData = new DevilData();

    var names_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "names.json"); 
    devilData.names = Loader.getCollection(names_jsonString) || new WeightedCollection();

    var features_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "features.json"); 
    devilData.features = Loader.getCollection(features_jsonString) || new WeightedCollection();

    var ghostTraits_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "ghost_traits.json"); 
    devilData.ghostTraits = Loader.getCollection(ghostTraits_jsonString) || new WeightedCollection();

    var ghostlyEffects_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "ghostly_effects.json"); 
    devilData.ghostlyEffects = Loader.getCollection(ghostlyEffects_jsonString) || new WeightedCollection();

    var aspects_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "aspects.json"); 
    devilData.aspects = Loader.getCollection(aspects_jsonString) || new WeightedCollection();

    var affinities_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "affinities.json"); 
    devilData.affinities = Loader.getCollection(affinities_jsonString) || new WeightedCollection();

    var desires_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "desires.json"); 
    devilData.desires = Loader.getCollection(desires_jsonString) || new WeightedCollection();

    var summonedHorrors_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "summoned_horrors.json"); 
    devilData.summonedHorrors = Loader.getCollection(summonedHorrors_jsonString) || new WeightedCollection();

    return devilData;
}

module.exports = getDevilData;