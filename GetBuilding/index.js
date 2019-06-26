const Builder = require("../Core/Builders/BuildingBuilder.js");
const Options = require("../Core/DataCarriers/Building.js").BuildingOptions;

module.exports = async function (context, req) {
    var options = new Options(req.params);

    context.res = {
        body: Builder.getBuilding(options)
    };
};