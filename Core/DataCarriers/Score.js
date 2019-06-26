class Score{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.client = params.client === undefined ? "" : params.client;
        this.target = params.target === undefined ? "" : params.target;
        this.work = params.work === undefined ? "" : params.work;
        this.complication = params.complication === undefined ? "" : params.complication;
        this.connection = params.connection === undefined ? "" : params.connection;
        this.faction = params.faction === undefined ? "" : params.faction;
    }
}

class ScoreOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.clientType = params.clientType === undefined ? "" : params.clientType;
        this.targetType = params.targetType === undefined ? "" : params.targetType;
        this.workType = params.workType === undefined ? "" : params.workType;
    }
}

exports.Score = Score;
exports.ScoreOptions = ScoreOptions;