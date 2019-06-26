const ForgottenGod = require("../Core/DataCarriers/ForgottenGod.js");

module.exports = async function (context, req) {
    context.res = {
        body: new ForgottenGod.ForgottenGod()
    }
};