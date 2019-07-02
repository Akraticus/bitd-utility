const WeightedCollection = require("../../DataCarriers/WeightedItems.js").WeightedCollection;

class BuildingData{
    constructor() {
        this.exterior_details = new WeightedCollection();
        this.exterior_materials = new WeightedCollection();
        this.uses_common = new WeightedCollection();
        this.uses_rare = new WeightedCollection();
        this.items = new WeightedCollection();
    }
}

module.exports = BuildingData;