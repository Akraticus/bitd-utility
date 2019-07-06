class Street{
    constructor(params) {
        params = params === undefined ? {} : params;
        
        this.mood = params.mood === undefined ? "" : params.mood;
        this.use = params.use === undefined ? "" : params.use;
        this.type = params.type === undefined ? "" : params.type;
        this.impressions = params.impressions === undefined ? new Impressions() : params.impressions;
        this.details = params.details === undefined || !Array.isArray(params.details) ? [] : params.details;
        this.props = params.props === undefined || !Array.isArray(params.props) ? [] : params.props; 
    }
}

class Impressions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.sights = params.sights === undefined || !Array.isArray(params.sights) ? [] : params.sights;
        this.sounds = params.sounds === undefined || !Array.isArray(params.sounds) ? [] : params.sounds;
        this.smells = params.smells === undefined || !Array.isArray(params.smells) ? [] : params.smells;
    }
}

class StreetOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.sightsAmount = params.sightsAmount === undefined ? 1 : params.sightsAmount;
        this.soundsAmount = params.soundsAmount === undefined ? 1 : params.soundsAmount;
        this.smellsAmount = params.smellsAmount === undefined ? 1 : params.smellsAmount;
        this.detailsAmount = params.detailsAmount === undefined ? 1 : params.detailsAmount;
        this.propsAmount = params.propsAmount === undefined ? 1 : params.propsAmount;
    }
}

exports.Street = Street;
exports.StreetOptions = StreetOptions;
exports.Impressions = Impressions;