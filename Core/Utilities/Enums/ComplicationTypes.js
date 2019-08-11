class ComplicationTypes{
    constructor() {
        this.all = "all";
        this.criminal = "criminal";
        this.miscellaneous = "miscellaneous";
        this.strange = "strange";
    }

    /**
     * @returns {string[]}
     */
    getAll(){
        return [this.all, this.criminal, this.miscellaneous, this.strange];
    }
}

const complicationTypes = new ComplicationTypes();
module.exports = complicationTypes;