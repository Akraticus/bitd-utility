const Score = require("./Score.js");
const ScoreData = require("./ScoreData.js");
const TreeBuilder = require("../../Tree Node/TreeBuilder.js");

const TargetTypes = require("../../Utilities/Enums/TargetTypes.js");
const ClientTypes = require("../../Utilities/Enums/ClientTypes.js");
const WorkTypes = require("../../Utilities/Enums/WorkTypes.js");
const ComplicationTypes = require("../../Utilities/Enums/ComplicationTypes.js");
const FactionTypes = require("../../Utilities/Enums/FactionTypes.js");

/** Builds a Score entity, given the provided data-object and options. */
/**
 * 
 * @param {ScoreData} scoreData 
 * @param {Score.ScoreOptions} scoreOptions 
 */
function getScore(scoreData, scoreOptions) {
    if (!scoreData) return;
    scoreOptions = scoreOptions || new Score.ScoreOptions();

    // instantiate return value
    let score = new Score.Score();

    // CLIENT
    let clientRoot;
    // get all valid target types based on the provided options
    let clientOptions = scoreOptions.clientTypes.map(v => v.toLowerCase());
    if (clientOptions.includes("all")) {
        clientRoot = TreeBuilder.combineRoots(...Object.values(scoreData.targets));
    }
    else {
        let clientRoots = [];
        for (let type of clientOptions) {

            switch (type) {
                case ClientTypes.civilian:
                    clientRoots.push(scoreData.targets.civilian);
                    break;
                case ClientTypes.criminal:
                    clientRoots.push(scoreData.targets.criminal);
                    break;
                case ClientTypes.political:
                    clientRoots.push(scoreData.targets.political);
                    break;
                case ClientTypes.strange:
                    clientRoots.push(scoreData.targets.strange);
                    break;
            }
        }

        clientRoot = TreeBuilder.combineRoots(...clientRoots);
    }
    if (clientRoot) {
        let client = clientRoot.getRandomLeafNode();
        score.client = client.transformByTags().value;
    }


    // TARGET
    let targetRoot;
    // get all valid target types based on the provided options
    let targetOptions = scoreOptions.targetTypes.map(v => v.toLowerCase());
    if (targetOptions.includes("all")) {
        targetRoot = TreeBuilder.combineRoots(...Object.values(scoreData.targets));
    }
    else {
        let targetRoots = [];
        for (let type of targetOptions) {

            switch (type) {
                case TargetTypes.civilian:
                    targetRoots.push(scoreData.targets.civilian);
                    break;
                case TargetTypes.criminal:
                    targetRoots.push(scoreData.targets.criminal);
                    break;
                case TargetTypes.political:
                    targetRoots.push(scoreData.targets.political);
                    break;
                case TargetTypes.strange:
                    targetRoots.push(scoreData.targets.strange);
                    break;
            }
        }

        targetRoot = TreeBuilder.combineRoots(...targetRoots);
    }
    if (targetRoot) {
        let target = targetRoot.getRandomLeafNode();
        score.target = target.transformByTags().value;
    }


    // WORK TYPE
    let workRoot;
    // get all valid target types based on the provided options
    let workOptions = scoreOptions.workTypes.map(v => v.toLowerCase());
    if (workOptions.includes("all")) {
        workRoot = TreeBuilder.combineRoots(...Object.values(scoreData.workTypes));
    }
    else {
        let workRoots = [];
        for (let type of workOptions) {

            switch (type) {
                case WorkTypes.skullduggery:
                    workRoots.push(scoreData.workTypes.skullduggery);
                    break;
                case WorkTypes.underworld:
                    workRoots.push(scoreData.workTypes.underworld);
                    break;
                case WorkTypes.unnatural:
                    workRoots.push(scoreData.workTypes.unnatural);
                    break;
                case WorkTypes.violence:
                    workRoots.push(scoreData.workTypes.violence);
                    break;
            }
        }

        workRoot = TreeBuilder.combineRoots(...workRoots);
    }
    if (workRoot) score.work = workRoot.getRandomLeafNode().value;

    // COMPLICATION
    let complicationRoot;
    // get all valid target types based on the provided options
    let complicationOptions = scoreOptions.complicationTypes.map(v => v.toLowerCase());
    if (complicationOptions.includes("all")) {
        complicationRoot = TreeBuilder.combineRoots(...Object.values(scoreData.complications));
    }
    else {
        let complicationRoots = [];
        for (let type of complicationOptions) {

            switch (type) {
                case ComplicationTypes.criminal:
                    complicationRoots.push(scoreData.complications.criminal);
                    break;
                case ComplicationTypes.strange:
                    complicationRoots.push(scoreData.complications.strange);
                    break;
                case ComplicationTypes.miscellaneous:
                    complicationRoots.push(scoreData.complications.miscellaneous);
                    break;
            }
        }

        complicationRoot = TreeBuilder.combineRoots(...complicationRoots);
    }
    if (complicationRoot) score.complication = complicationRoot.getRandomLeafNode().value;

    // CONNECTIONS
    score.connection = scoreData.connections.getRandomLeafNode().value;

    // FACTIONS
    let factionRoot;
    // get all valid target types based on the provided options
    let factionOptions = scoreOptions.factionTypes.map(v => v.toLowerCase());
    if (factionOptions.includes("all")) {
        factionRoot = TreeBuilder.combineRoots(...Object.values(scoreData.factions));
    }
    else {
        let factionRoots = [];
        for (let type of factionOptions) {

            switch (type) {
                case FactionTypes.institutions:
                    factionRoots.push(scoreData.factions.institutions);
                    break;
                case FactionTypes.laborAndTrade:
                    factionRoots.push(scoreData.factions.laborAndTrade);
                    break;
                case FactionTypes.theFringe:
                    factionRoots.push(scoreData.factions.theFringe);
                    break;
                case FactionTypes.underworld:
                    factionRoots.push(scoreData.factions.underworld);
                    break;
            }
        }

        factionRoot = TreeBuilder.combineRoots(...factionRoots);
    }
    if (factionRoot) score.faction = factionRoot.getRandomLeafNode().value;

    return score;
}

module.exports = getScore;