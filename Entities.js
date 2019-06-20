class Street{
    constructor(params) {
        this.mood = params.mood === undefined ? "" : params.mood;
        this.use = params.use === undefined ? "" : params.use;
        this.type = params.type === undefined ? "" : params.type;
        this.impressions = params.impressions === undefined || !Array.isArray(params.impressions) ? [] : params.impressions;
        this.details = params.details === undefined || !Array.isArray(params.details) ? [] : params.details;
        this.props = params.props === undefined || !Array.isArray(params.props) ? [] : params.props; 
    }
}

class StreetOptions{
    constructor(params) {
        this.impressionsAmount = params.impressionsAmount === undefined ? 1 : params.impressionsAmount;
        this.detailsAmount = params.detailsAmount === undefined ? 1 : params.detailsAmount;
        this.propsAmount = params.propsAmount === undefined ? 1 : params.propsAmount;
    }
}

class Building{
    constructor(params) {
        this.exterior = params.exterior === undefined ? new Exterior() : params.exterior;
        this.details = params.details === undefined ? "" : params.details;
        this.use = params.use === undefined ? "" : params.use;
        this.items = params.items === undefined || !Array.isArray(params.items) ? [] : params.items;
    }
}

class BuildingOptions{
    constructor(params) {
        this.itemsAmount = params.itemsAmount === undefined ? 1 : params.itemsAmount;
    }
}

class Exterior{
    constructor(params) {
        this.material = params.material === undefined ? "" : params.material;
        this.details = params.details === undefined ? "" : params.details;
    }
}

class Person{
    constructor(params) {
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
        this.goalAmount = params.goalAmount === undefined ? 1 : params.goalAmount;
        this.personalityOptions = params.personalityOptions === undefined ? new PersonalityOptions() : params.personalityOptions;
    }
}

class Appearance{
    constructor(params) {
        this.sex = params.sex === undefined ? "" : params.sex;
        this.heritage = params.heritage === undefined ? "" : params.heritage;
        this.look = params.look === undefined ? "" : params.look;
        this.style = params.style === undefined ? "" : params.style;
        this.miscellaneous = params.miscellaneous === undefined || !Array.isArray(params.miscellaneous) ? [] : params.miscellaneous; // tycherosi demon blood
    }
}

class Personality{
    constructor(params) {
        this.traits = params.traits === undefined || !Array.isArray(params.traits) ? [] : params.traits;
        this.interests = params.interests === undefined || !Array.isArray(params.interests) ? [] : params.interests;
        this.quirks = params.quirks === undefined || !Array.isArray(params.quirks) ? [] : params.quirks;
    }
}

class PersonalityOptions{
    constructor(params) {
        this.traitsAmount = params.traitsAmount === undefined ? 1 : params.traitsAmount;
        this.interestsAmount = params.interestsAmount === undefined ? 1 : params.interestsAmount;
        this.quirksAmount = params.quirksAmount === undefined ? 1 : params.quirksAmount;
    }
}

class Devil{
    constructor(params) {
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
        this.name = params.name === undefined ? "" : params.name;
        this.cultPractices = params.cultPractices === undefined || !Array.isArray(params.cultPractices) ? [] : params.cultPractices;
    }
}

class ForgottenGodOptions{
    constructor(params) {
        this.cultPracticeAmount = params.cultPracticeAmount === undefined ? 1 : params.cultPracticeAmount;
    }
}

class Score{
    constructor(params) {
        this.client = params.client === undefined ? "" : params.client;
        this.target = params.target === undefined ? "" : params.target;
        this.work = params.work === undefined ? "" : params.work;
        this.complication = params.complication === undefined ? "" : params.complication;
        this.connection = params.connection === undefined ? "" : params.connection;
        this.faction = params.faction === undefined ? "" : params.faction;
    }
}