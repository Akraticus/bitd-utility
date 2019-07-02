const WeightedValues = require("../../DataCarriers/WeightedItems.js");
const WeightedValue = WeightedValues.WeightedValue;
const WeightedCollection = WeightedValues.WeightedCollection;

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

        this.cultPracticeType = params.cultPracticeType === undefined ? undefined : params.cultPracticeType;
        this.cultPracticesAmount = params.cultPracticesAmount === undefined ? 1 : params.cultPracticesAmount;
    }
}

exports.ForgottenGod = ForgottenGod;
exports.ForgottenGodOptions = ForgottenGodOptions;

let cultPracticeTypes = new WeightedCollection();
cultPracticeTypes.value.push(new WeightedValue("acquisition"));
cultPracticeTypes.value.push(new WeightedValue("congregation"));
cultPracticeTypes.value.push(new WeightedValue("consecration"));
cultPracticeTypes.value.push(new WeightedValue("desecration"));
cultPracticeTypes.value.push(new WeightedValue("destruction"));
cultPracticeTypes.value.push(new WeightedValue("sacrifice"));

exports.CultPracticeTypes = cultPracticeTypes;