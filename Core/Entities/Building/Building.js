class Building{
    constructor(params) {
        params = params || {};

        this.exterior = params.exterior === undefined ? new Exterior() : params.exterior;
        this.use = params.use;
        this.items = params.items === undefined || !Array.isArray(params.items) ? [] : params.items;
    }
}

class Exterior{
    constructor(params) {
        params = params || {};

        this.materials = params.materials === undefined || !Array.isArray(params.materials) ? [] : params.materials;
        this.details = params.details === undefined || !Array.isArray(params.details) ? [] : params.details;
    }
}

class BuildingOptions{
    constructor(params) {
        params = params || {};

        this.materialsAmount = params.materialsAmount || 0;
        this.itemsAmount = params.itemsAmount || 0;
        this.useType = params.useType;
        this.detailsAmount = params.detailsAmount || 0;
    }
}

exports.Building = Building;
exports.BuildingOptions = BuildingOptions;
exports.Exterior = Exterior;