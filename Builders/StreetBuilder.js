const Entities = require("../DataCarriers/Entities.js/index.js");
const Street = Entities.Street;
const Loader = require("../WeightedCollectionLoader.js");

/** Builds a Street-object based on the provided options. If no options are provided, defaults are used. */
exports.getStreet = function getStreet(streetOptions){
    // undefined => load defaults
    streetOptions = streetOptions === undefined ? new Entities.StreetOptions() : streetOptions;

    Loader.setDirectory("Data/Street");
    let moods = Loader.getCollection("moods.json");
    let sights = Loader.getCollection("sights.json");
    let sounds = Loader.getCollection("sounds.json");
    let smells = Loader.getCollection("smells.json");
    let uses = Loader.getCollection("uses.json");
    let types = Loader.getCollection("types.json");
    let details = Loader.getCollection("details.json");
    let props = Loader.getCollection("props.json");

    let street = new Street();

    // MOOD, USE, TYPE
    street.mood = moods.spliceRandomElement().value;
    street.use = uses.spliceRandomElement().value;
    street.type = types.spliceRandomElement().value;

    // DETAILS
    // Undefined || <0 => set to 0
    streetOptions.detailsAmount = streetOptions.detailsAmount === undefined || streetOptions.detailsAmount < 0 ? 0 : streetOptions.detailsAmount;
    for(var i = 0; i < streetOptions.detailsAmount; i++){
        street.details.push(details.spliceRandomElement().value);
    }

    // PROPS
    // Undefined || <0 => set to 0
    streetOptions.propsAmount = streetOptions.propsAmount === undefined || streetOptions.propsAmount < 0 ? 0 : streetOptions.propsAmount;
    for(var i = 0; i < streetOptions.propsAmount; i++){
        street.props.push(props.spliceRandomElement().value);
    }

    // IMPRESSIONS
    // Undefined => load defaults
    let impressionsOptions = streetOptions.impressionsOptions = streetOptions.impressionsOptions === undefined ? new Entities.ImpressionsOptions() : streetOptions.impressionsOptions;

    // SIGHTS
    // Undefined || <0 => set to 0
    impressionsOptions.sightsAmount = impressionsOptions.sightsAmount === undefined || impressionsOptions.sightsAmount < 0 ? 0 : impressionsOptions.sightsAmount;
    for(var i = 0; i < impressionsOptions.sightsAmount; i++){
        street.impressions.sights.push(sights.spliceRandomElement().value);
    }

    // SOUNDS
    // Undefined || <0 => set to 0
    impressionsOptions.soundsAmount = impressionsOptions.soundsAmount === undefined || impressionsOptions.soundsAmount < 0 ? 0 : impressionsOptions.soundsAmount;
    for(var i = 0; i < impressionsOptions.soundsAmount; i++){
        street.impressions.sounds.push(sounds.spliceRandomElement().value);
    }

    // SMELLS
    // Undefined || <0 => set to 0
    impressionsOptions.smellsAmount = impressionsOptions.smellsAmount === undefined || impressionsOptions.smellsAmount < 0 ? 0 : impressionsOptions.smellsAmount;
    for(var i = 0; i < impressionsOptions.smellsAmount; i++){
        street.impressions.smells.push(smells.spliceRandomElement().value);
    }

    return street;
}