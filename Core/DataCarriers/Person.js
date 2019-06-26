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

exports.Person = Person;
exports.PersonOptions = PersonOptions;
exports.Personality = Personality;
exports.PersonalityOptions = PersonalityOptions;