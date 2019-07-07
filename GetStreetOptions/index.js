const Options = require("../Core/Entities/Street/Street.js").StreetOptions;

module.exports = async function (context, req) {
    try {
        context.res = {
            status: 200,
            body: new Options()
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default Street options object:\n\n" + error
        }
    }
};