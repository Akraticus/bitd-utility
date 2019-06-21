const Entities = require("./Entities.js");
const Street = Entities.Street;
const Loader = require("./WeightedCollectionLoader.js");
const WeightedItem = require("./WeightedItems.js");

exports.getStreet = function getStreet(streetOptions){
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
    street.mood = WeightedItem.getRandomElementFromWeightedCollection(moods);
    street.use = WeightedItem.getRandomElementFromWeightedCollection(uses);
    street.type = WeightedItem.getRandomElementFromWeightedCollection(types);

    streetOptions.detailsAmount = streetOptions.detailsAmount === undefined || streetOptions.detailsAmount < 0 ? 1 : streetOptions.detailsAmount;
    for(var i = 0; i < streetOptions.detailsAmount; i++){
        // todo: ensure no duplicates
        street.details.push(WeightedItem.getRandomElementFromWeightedCollection(details));
    }
    streetOptions.propsAmount = streetOptions.propsAmount === undefined || streetOptions.propsAmount < 0 ? 1 : streetOptions.propsAmount;
    for(var i = 0; i < streetOptions.propsAmount; i++){
        // todo: ensure no duplicates
        street.props.push(WeightedItem.getRandomElementFromWeightedCollection(props));
    }

    let impressionsOptions = streetOptions.impressionsOptions = streetOptions.impressionsOptions === undefined ? new Entities.ImpressionsOptions() : streetOptions.impressionsOptions;
    impressionsOptions.sightsAmount = impressionsOptions.sightsAmount === undefined || streetOptions.sightsAmount < 1 ? 0 : streetOptions.sightsAmount;
    for(var i = 0; i < impressionsOptions.sightsAmount; i++){
        // todo: ensure no duplicates
        street.impressions.sights.push(WeightedItem.getRandomElementFromWeightedCollection(sights));
    }
    impressionsOptions.soundsAmount = impressionsOptions.soundsAmount === undefined || streetOptions.soundsAmount < 1 ? 0 : streetOptions.soundsAmount;
    for(var i = 0; i < impressionsOptions.soundsAmount; i++){
        // todo: ensure no duplicates
        street.impressions.sounds.push(WeightedItem.getRandomElementFromWeightedCollection(sounds));
    }
    impressionsOptions.smellsAmount = impressionsOptions.smellsAmount === undefined || streetOptions.smellsAmount < 1 ? 0 : streetOptions.smellsAmount;
    for(var i = 0; i < impressionsOptions.smellsAmount; i++){
        // todo: ensure no duplicates
        street.impressions.smells.push(WeightedItem.getRandomElementFromWeightedCollection(smells));
    }

    return street;
}