const Node = require("../../Tree Node/Node.js");

class BuildingData{
    constructor() {
        this.exterior_details = new Node();
        this.exterior_materials = new Node();
        this.uses_common = new Node();
        this.uses_rare = new Node();
        this.items = new Node();
    }
}

module.exports = BuildingData;