class Devil{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.name = params.name === undefined ? "" : params.name;
        this.feature = params.feature === undefined ? "" : params.feature; 
        this.aspect = params.aspect === undefined ? "" : params.aspect;
        this.affinity = params.affinity === undefined ? "" : params.affinity;
        this.desire = params.desire === undefined ? "" : params.desire;
        this.summonedHorror = params.summonedHorror === undefined ? "" : params.summonedHorror;

    }
}

exports.Devil = Devil;