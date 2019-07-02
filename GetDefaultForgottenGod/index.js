const ForgottenGod = require("../Core/DataCarriers/ForgottenGod.js");

module.exports = async function (context, req) {
    try {
        context.res = {
            status: 200,
            body: new ForgottenGod.ForgottenGod()
        }
    } catch (error) {
        context.res = {
            status: 200,
            body: "Error constructing default object:\n\n" + error
        }
    }
};