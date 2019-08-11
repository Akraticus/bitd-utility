class WorkTypes{
    constructor() {
        this.all = "all";
        this.skullduggery = "skullduggery";
        this.underworld = "underworld";
        this.unnatural = "unnatural";
        this.violence = "violence";
    }

    /**
     * @returns {string[]}
     */
    getAll(){
        return [this.all, this.skullduggery, this.underworld, this.unnatural, this.violence];
    }
}

const workTypes = new WorkTypes();
module.exports = workTypes;