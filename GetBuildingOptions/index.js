const Options = require("../Core/DataCarriers/Building.js").BuildingOptions;

module.exports = async function (context, req) {
    try {
        context.res = {
            status: 200,
            body: new Options()
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default Building options object:\n\n" + error
        }
    }
};