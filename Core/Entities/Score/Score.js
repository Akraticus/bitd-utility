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
    constructor() {
        this.clientTypes = ClientTypes.getAll();
        this.targetTypes = TargetTypes.getAll();
        this.workTypes = WorkTypes.getAll();
        this.complicationTypes = ComplicationTypes.getAll();
        this.factionTypes = FactionTypes.getAll();
    }

    setClientTypes(...types){
        this.clientTypes = [...types];
        // this.clientTypes.push(...types);
    }

    setTargetTypes(...types){
        this.targetTypes = [...types];
        // this.targetTypes.push(...types);
    }

    setWorkTypes(...types){
        this.workTypes = [...types];
        // this.workTypes.push(...types);
    }

    setComplicationTypes(...types){
        this.complicationTypes = [...types];
        // this.complicationTypes.push(...types);
    }

    setFactionTypes(...types){
        this.factionTypes = [...types];
        // this.factionTypes.push(...types);
    }
}

exports.Score = Score;
exports.ScoreOptions = ScoreOptions;
