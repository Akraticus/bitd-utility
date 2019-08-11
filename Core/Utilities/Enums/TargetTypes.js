class TargetTypes{
    constructor() {
        this.all = "all";
        this.civilian = "civilian";
        this.criminal = "criminal";
        this.political = "political";
        this.strange = "strange";
    }

    /**
     * @returns {string[]}
     */
    getAll(){
        return [this.all, this.civilian, this.criminal, this.political, this.strange];
    }
}

const targetTypes = new TargetTypes();
module.exports = targetTypes;