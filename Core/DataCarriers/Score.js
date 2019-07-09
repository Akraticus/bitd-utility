class Score{
    constructor(params) {
        params = params || {};

        this.client = params.client || "";
        this.target = params.target || "";
        this.work = params.work  || "";
        this.complication = params.complication || "";
        this.connection = params.connection || "";
        this.faction = params.faction || "";
    }
}

class ScoreOptions{
    constructor(params) {
        params = params || {};

        this.clientType = params.clientType === undefined ? "" : params.clientType;
        this.targetType = params.targetType === undefined ? "" : params.targetType;
        this.workType = params.workType === undefined ? "" : params.workType;
    }
}

exports.Score = Score;
exports.ScoreOptions = ScoreOptions;