const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;

class DevilData{
    constructor() {
        this.names = new WeightedCollection();
        this.features = new WeightedCollection();
        this.ghostTraits = new WeightedCollection();
        this.ghostlyEffects = new WeightedCollection();
        this.aspects = new WeightedCollection();
        this.affinities = new WeightedCollection();
        this.desires = new WeightedCollection();
        this.summonedHorrors = new WeightedCollection();
    }
}

module.exports = DevilData;