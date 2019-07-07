const Street = require("../Core/DataCarriers/Street.js");

module.exports = async function (context, req) {
    try {
        context.res = {
            status:200,
            body: new Street.Street()
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default object:\n\n" + error
        }
    }
};