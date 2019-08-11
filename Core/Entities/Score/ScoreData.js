const Node = require("../../Tree Node/Node.js");

class ScoreData{
    constructor() {
        this.complications = new Complications();
        this.connections = new Node();
        this.targets = new Targets();
        this.workTypes = new WorkTypes();
        this.factions = new Factions();
    }
}

class Complications{
    constructor() {
        this.criminal = new Node();
        this.miscellaneous = new Node();
        this.strange = new Node();
    }
}

class Targets{
    constructor() {
        this.civilian = new Node();
        this.criminal = new Node();
        this.political = new Node();
        this.strange = new Node();
    }
}

class WorkTypes {
    constructor() {
        this.skullduggery = new Node();
        this.underworld = new Node();
        this.unnatural = new Node();
        this.violence = new Node();
    }
}

class Factions {
    constructor() {
        this.institutions = new Node();
        this.laborAndTrade = new Node();
        this.theFringe = new Node();
        this.underworld = new Node();
    }
}

module.exports = ScoreData;