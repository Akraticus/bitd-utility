const Devil = require("../Core/Entities/Devil/Devil.js").Devil;

module.exports = async function (context, req) {
    try {
        context.res = {
            status:200,
            body: new Devil()
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default object:\n\n" + error
        }
    }
};