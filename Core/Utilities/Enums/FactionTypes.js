class FactionTypes{
    constructor() {
        this.all = "all";
        this.institutions = "institutions";
        this.laborAndTrade = "labor and trade";
        this.theFringe = "the fringe";
        this.underworld = "underworld";

    }

    /**
     * @returns {string[]}
     */
    getAll(){
        return [this.all, this.institutions, this.laborAndTrade, this.theFringe, this.underworld];
    }
}

const factionTypes = new FactionTypes();

module.exports = factionTypes;