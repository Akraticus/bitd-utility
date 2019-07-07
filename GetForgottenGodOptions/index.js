const Options = require("../Core/Entities/ForgottenGod/ForgottenGod.js").ForgottenGodOptions;

module.exports = async function (context, req) {
    try {
        context.res = {
            status: 200,
            body: new Options()
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default Forgotten God options object:\n\n" + error
        }
    }
};