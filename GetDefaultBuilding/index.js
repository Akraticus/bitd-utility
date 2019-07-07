const Building = require("../Core/DataCarriers/Building.js");

module.exports = async function (context, req) {
    try {
        context.res = {
            status: 200,
            body: new Building.Building()
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default object:\n\n" + error
        }
    }
};