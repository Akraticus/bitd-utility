const Street = require("./Street.js");

/** Builds a Street data-object based on the provided options. If no options are provided, defaults are used. */
exports.getStreet = function getStreet(streetData, streetOptions){
    if(streetData === undefined) return;

    // undefined => load defaults
    streetOptions = streetOptions === undefined ? new Street.StreetOptions() : streetOptions;

    let moods = streetData.moods;
    let sights = streetData.sights;;
    let sounds = streetData.sounds;
    let smells = streetData.smells;
    let uses = streetData.uses;
    let types = streetData.types;
    let details = streetData.details;
    let props = streetData.props;

    let street = new Street.Street();

    // MOOD, USE, TYPE
    street.mood = moods.spliceRandomElement().value;
    street.use = uses.spliceRandomElement().value;
    street.type = types.spliceRandomElement().value;

    // DETAILS
    // Undefined || <0 => set to 0
    streetOptions.detailsAmount = streetOptions.detailsAmount === undefined || streetOptions.detailsAmount < 0 ? 0 : streetOptions.detailsAmount;
    for(var i = 0; i < streetOptions.detailsAmount; i++){
        if(details.length <= 0) break;
        street.details.push(details.spliceRandomElement().value);
    }

    // PROPS
    // Undefined || <0 => set to 0
    streetOptions.propsAmount = streetOptions.propsAmount === undefined || streetOptions.propsAmount < 0 ? 0 : streetOptions.propsAmount;
    for(var i = 0; i < streetOptions.propsAmount; i++){
        if(props.length <= 0) break;
        street.props.push(props.spliceRandomElement().value);
    }

    // IMPRESSIONS
    // Undefined => load defaults
    // let impressionsOptions = streetOptions.impressionsOptions = streetOptions.impressionsOptions === undefined ? new Street.ImpressionsOptions() : streetOptions.impressionsOptions;

    // SIGHTS
    // Undefined || <0 => set to 0
    streetOptions.sightsAmount = streetOptions.sightsAmount === undefined || streetOptions.sightsAmount < 0 ? 0 : streetOptions.sightsAmount;
    for(var i = 0; i < streetOptions.sightsAmount; i++){
        if(sights.length <= 0) break;
        street.impressions.sights.push(sights.spliceRandomElement().value);
    }

    // SOUNDS
    // Undefined || <0 => set to 0
    streetOptions.soundsAmount = streetOptions.soundsAmount === undefined || streetOptions.soundsAmount < 0 ? 0 : streetOptions.soundsAmount;
    for(var i = 0; i < streetOptions.soundsAmount; i++){
        if(sounds.length <= 0) break;
        street.impressions.sounds.push(sounds.spliceRandomElement().value);
    }

    // SMELLS
    // Undefined || <0 => set to 0
    streetOptions.smellsAmount = streetOptions.smellsAmount === undefined || streetOptions.smellsAmount < 0 ? 0 : streetOptions.smellsAmount;
    for(var i = 0; i < streetOptions.smellsAmount; i++){
        if(smells.length <= 0) break;
        street.impressions.smells.push(smells.spliceRandomElement().value);
    }

    return street;
}