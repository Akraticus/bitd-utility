class Devil{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.name = params.name || "";
        this.aspect = params.aspect || "";
        this.affinity = params.affinity || "";

        this.features = Array.isArray(params.features) ? params.features : [];
        this.desires = Array.isArray(params.desires) ? params.desires : [];
        this.summonedHorrors = Array.isArray(params.summonedHorrors) ? params.summonedHorrors : [];
        this.ghostTraits = Array.isArray(params.ghostTraits) ? params.ghostTraits : [];
        this.ghostlyEffects = Array.isArray(params.ghostlyEffects) ? params.ghostlyEffects : [];
    }
}

class DevilOptions {
    constructor(params) {
        params = params === undefined ? {} : params;

        this.featuresAmount = params.featuresAmount || 1;
        this.desiresAmount = params.desiresAmount || 1;
        this.summonedHorrorsAmount = params.summonedHorrorsAmount || 1;
        this.ghostTraitsAmount = params.ghostTraitsAmount || 1;
        this.ghostlyEffectsAmount = params.ghostlyEffectsAmount || 1;
    }
}

exports.Devil = Devil;
exports.DevilOptions = DevilOptions;