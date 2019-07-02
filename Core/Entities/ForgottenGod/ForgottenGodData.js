const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;

class ForgottenGodData{
    constructor() {
        this.names = new WeightedCollection();
        this.acquisitions = new WeightedCollection();
        this.consecrations = new WeightedCollection();
        this.congregations = new WeightedCollection();
        this.desecrations = new WeightedCollection();
        this.destructions = new WeightedCollection();
        this.sacrifices = new WeightedCollection();
    }
}

module.exports = ForgottenGodData;