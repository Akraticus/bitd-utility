const FsUtil = require("../../Utilities/FsUtility.js");
const Loader = require("../../Utilities/WeightedCollectionLoader.js");
const ScoreData = require("../Score/ScoreData.js");
const TreeBuilder = require("../../Tree Node/TreeBuilder.js");


let defaultDirectory = "Core/Data/";

/**
 * @returns {ScoreData} 
 */
function getScoreData(){
    var scoreData = new ScoreData();

    // COMPLICATIONS
    let complications_criminal_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Complications", "criminal.json");
    let complications_strange_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Complications", "strange.json");
    let complications_misc_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Complications", "miscellaneous.json");

    scoreData.complications.criminal = TreeBuilder.createRootFromCollection(Loader.getCollection(complications_criminal_jsonString));
    scoreData.complications.strange = TreeBuilder.createRootFromCollection(Loader.getCollection(complications_strange_jsonString));
    scoreData.complications.miscellaneous = TreeBuilder.createRootFromCollection(Loader.getCollection(complications_misc_jsonString));
    

    // TARGETS (used for both clients and targets)
    let targets_civilian_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Targets", "civilian.json"); 
    let targets_criminal_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Targets", "criminal.json"); 
    let targets_political_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Targets", "political.json"); 
    let targets_strange_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Targets", "strange.json");

    scoreData.targets.civilian = TreeBuilder.createRootFromCollection(Loader.getCollection(targets_civilian_jsonString));
    scoreData.targets.criminal = TreeBuilder.createRootFromCollection(Loader.getCollection(targets_criminal_jsonString));
    scoreData.targets.political = TreeBuilder.createRootFromCollection(Loader.getCollection(targets_political_jsonString));
    scoreData.targets.strange = TreeBuilder.createRootFromCollection(Loader.getCollection(targets_strange_jsonString));
    
    // CONNECTIONS
    let connections_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Connections", "connections.json"); 
    scoreData.connections = TreeBuilder.createRootFromCollection(Loader.getCollection(connections_jsonString));

    // WORK TYPES
    let workTypes_skullduggery_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Work Types", "skullduggery.json"); 
    let workTypes_underworld_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Work Types", "underworld.json"); 
    let workTypes_unnatural_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Work Types", "unnatural.json"); 
    let workTypes_violence_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Work Types", "violence.json"); 
    
    scoreData.workTypes.skullduggery = TreeBuilder.createRootFromCollection(Loader.getCollection(workTypes_skullduggery_jsonString));
    scoreData.workTypes.underworld = TreeBuilder.createRootFromCollection(Loader.getCollection(workTypes_underworld_jsonString));
    scoreData.workTypes.unnatural = TreeBuilder.createRootFromCollection(Loader.getCollection(workTypes_unnatural_jsonString));
    scoreData.workTypes.violence = TreeBuilder.createRootFromCollection(Loader.getCollection(workTypes_violence_jsonString));

    // FACTIONS
    let factions_institutions_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Factions", "institutions.json"); 
    let factions_laborAndTrade_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Factions", "labor_and_trade.json"); 
    let factions_theFringe_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Factions", "the_fringe.json"); 
    let factions_underworld_jsonString = FsUtil.getFromFileSystemSync(defaultDirectory, "Factions", "underworld.json"); 

    scoreData.factions.institutions = TreeBuilder.createRootFromCollection(Loader.getCollection(factions_institutions_jsonString));
    scoreData.factions.laborAndTrade = TreeBuilder.createRootFromCollection(Loader.getCollection(factions_laborAndTrade_jsonString));
    scoreData.factions.theFringe = TreeBuilder.createRootFromCollection(Loader.getCollection(factions_theFringe_jsonString));
    scoreData.factions.underworld = TreeBuilder.createRootFromCollection(Loader.getCollection(factions_underworld_jsonString));

    return scoreData;
}

module.exports = getScoreData;