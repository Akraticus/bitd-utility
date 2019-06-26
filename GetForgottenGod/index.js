const ForgottenGod = require("../Core/DataCarriers/ForgottenGod.js");
const Builder = require("../Core/Builders/ForgottenGodBuilder.js");
const Options = ForgottenGod.ForgottenGodOptions;

module.exports = async function (context, req) {
    var params = req.body ? req.body : req.query
    let options = new Options(params);

    context.res = {
        body: Builder.getForgottenGod(options)
    }
};