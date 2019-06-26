const Options = require("../Core/DataCarriers/Building.js").BuildingOptions;

module.exports = async function (context, req) {
    context.res = {
        body: new Options()
    }
};