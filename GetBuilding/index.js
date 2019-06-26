const Builder = require("../Core/Builders/BuildingBuilder.js");
const Options = require("../Core/DataCarriers/Building.js").BuildingOptions;

module.exports = async function (context, req) {
    var params = req.body ? req.body : req.query;
    var options = new Options(params);

    context.res = {
        body: Builder.getBuilding(options)
    };
};