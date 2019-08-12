const ClientTypes = require("../../Utilities/Enums/ClientTypes.js");
const TargetTypes = require("../../Utilities/Enums/TargetTypes.js");
const WorkTypes = require("../../Utilities/Enums/WorkTypes.js");
const ComplicationTypes = require("../../Utilities/Enums/ComplicationTypes.js");
const FactionTypes = require("../../Utilities/Enums/FactionTypes.js");

class Score{
    constructor(params) {
        params = params || {};

        this.client = params.client || [];
        this.target = params.target || [];
        this.work = params.work || [];
        this.complication = params.complication || [];
        this.connection = params.connection || [];
        this.faction = params.faction || [];
    }
}

class ScoreOptions{
    constructor(params) {
        this.clientTypes = params.clientTypes || ClientTypes.getAll();
        this.targetTypes = params.targetTypes || TargetTypes.getAll();
        this.workTypes = params.workTypes || WorkTypes.getAll();
        this.complicationTypes = params.complicationTypes || ComplicationTypes.getAll();
        this.factionTypes = params.factionTypes || FactionTypes.getAll();
    }

    setClientTypes(...types){
        this.clientTypes = [...types];
    }

    setTargetTypes(...types){
        this.targetTypes = [...types];
    }

    setWorkTypes(...types){
        this.workTypes = [...types];
    }

    setComplicationTypes(...types){
        this.complicationTypes = [...types];
    }

    setFactionTypes(...types){
        this.factionTypes = [...types];
    }
}

exports.Score = Score;
exports.ScoreOptions = ScoreOptions;
