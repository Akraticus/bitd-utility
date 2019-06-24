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

class ImpressionsOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.sightsAmount = params.sightsAmount === undefined ? 1 : params.sightsAmount;
        this.soundsAmount = params.soundsAmount === undefined ? 1 : params.soundsAmount;
        this.smellsAmount = params.smellsAmount === undefined ? 1 : params.smellsAmount;
    }
}

class StreetOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.impressionsOptions = params.impressionsOptions === undefined ? new ImpressionsOptions() : params.impressionsOptions;
        this.detailsAmount = params.detailsAmount === undefined ? 1 : params.detailsAmount;
        this.propsAmount = params.propsAmount === undefined ? 1 : params.propsAmount;
    }
}

class Building{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.exterior = params.exterior === undefined ? new Exterior() : params.exterior;
        this.use = params.use === undefined ? "" : params.use;
        this.items = params.items === undefined || !Array.isArray(params.items) ? [] : params.items;
    }
}

class BuildingOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.itemsAmount = params.itemsAmount === undefined ? 1 : params.itemsAmount;
        this.useType = params.useType === undefined || params.useType.toLowerCase() !== "common" || params.useType.toLowerCase() !== "rare"  ? "common" : params.useType;
        this.detailsAmount = params.detailsAmount === undefined ? 1 : params.detailsAmount;
    }
}

class Exterior{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.material = params.material === undefined ? "" : params.material;
        this.details = params.details === undefined || !Array.isArray(params.details) ? [] : params.details;
    }
}

class Person{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.name = params.name === undefined ? "" : params.name;
        this.familyName = params.familyName === undefined ? "" : params.familyName;
        this.alias = params.alias === undefined ? "" : params.alias;
        this.appearance = params.appearance === undefined ? new Appearance() : params.appearance;
        this.personality = params.personality === undefined ? new Personality() : params.personality;
        this.methods = params.methods === undefined ? "" : params.methods;
        this.profession = params.profession === undefined ? "" : params.profession;
        this.goals = params.goals === undefined || !Array.isArray(params.goals) ? [] : params.goals;
    }
}

class PersonOptions{
    constructor(params) {
        params = params === undefined ? {} : params;
        
        this.goalAmount = params.goalAmount === undefined ? 1 : params.goalAmount;
        this.personalityOptions = params.personalityOptions === undefined ? new PersonalityOptions() : params.personalityOptions;
    }
}

class Appearance{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.sex = params.sex === undefined ? "" : params.sex;
        this.heritage = params.heritage === undefined ? "" : params.heritage;
        this.look = params.look === undefined ? "" : params.look;
        this.style = params.style === undefined ? "" : params.style;
        this.miscellaneous = params.miscellaneous === undefined || !Array.isArray(params.miscellaneous) ? [] : params.miscellaneous; // tycherosi demon blood
    }
}

class Personality{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.traits = params.traits === undefined || !Array.isArray(params.traits) ? [] : params.traits;
        this.interests = params.interests === undefined || !Array.isArray(params.interests) ? [] : params.interests;
        this.quirks = params.quirks === undefined || !Array.isArray(params.quirks) ? [] : params.quirks;
    }
}

class PersonalityOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.traitsAmount = params.traitsAmount === undefined ? 1 : params.traitsAmount;
        this.interestsAmount = params.interestsAmount === undefined ? 1 : params.interestsAmount;
        this.quirksAmount = params.quirksAmount === undefined ? 1 : params.quirksAmount;
    }
}

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

class ForgottenGod{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.name = params.name === undefined ? "" : params.name;
        this.cultPractices = params.cultPractices === undefined || !Array.isArray(params.cultPractices) ? [] : params.cultPractices;
    }
}

class ForgottenGodOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.cultPracticeAmount = params.cultPracticeAmount === undefined ? 1 : params.cultPracticeAmount;
    }
}

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

exports.Street = Street;
exports.Impressions = Impressions;
exports.ImpressionsOptions = ImpressionsOptions;
exports.StreetOptions = StreetOptions;
exports.Building = Building;
exports.BuildingOptions = BuildingOptions;
exports.Exterior = Exterior;
exports.Person = Person;
exports.PersonOptions = PersonOptions;
exports.Appearance = Appearance;
exports.Personality = Personality;
exports.PersonalityOptions = PersonalityOptions;
exports.Devil = Devil;
exports.ForgottenGod = ForgottenGod;
exports.ForgottenGodOptions = ForgottenGodOptions;
exports.Score = Score;
exports.ScoreOptions = ScoreOptions;