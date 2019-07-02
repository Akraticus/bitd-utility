const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;

class StreetData{
    constructor(params) {
        this.moods = new WeightedCollection();
        this.sights = new WeightedCollection();
        this.sounds = new WeightedCollection();
        this.smells = new WeightedCollection();
        this.uses = new WeightedCollection();
        this.types = new WeightedCollection();
        this.details = new WeightedCollection();
        this.props = new WeightedCollection();
    }
}

module.exports = StreetData;