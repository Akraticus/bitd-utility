class Building{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.exterior = params.exterior === undefined ? new Exterior() : params.exterior;
        this.use = params.use === undefined ? "" : params.use;
        this.items = params.items === undefined || !Array.isArray(params.items) ? [] : params.items;
    }
}

class Exterior{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.material = params.material === undefined ? "" : params.material;
        this.details = params.details === undefined || !Array.isArray(params.details) ? [] : params.details;
    }
}

class BuildingOptions{
    constructor(params) {
        params = params === undefined ? {} : params;

        this.itemsAmount = params.itemsAmount === undefined ? 1 : params.itemsAmount;
        this.useType = params.useType === undefined || params.useType.toLowerCase() !== "common" || params.useType.toLowerCase() !== "rare"  ? "common" : params.useType;
        this.detailsAmount = params.detailsAmount === undefined ? 1 : params.detailsAmount;
    }
}

exports.Building = Building;
exports.BuildingOptions = BuildingOptions;
exports.Exterior = Exterior;