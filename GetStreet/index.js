const Builder = require("../Core/Builders/StreetBuilder.js");
const Options = require("../Core/DataCarriers/Street.js").StreetOptions;

module.exports = async function (context, req) {
    var params = req.body ? req.body : req.query;
    var options = new Options(params);

    context.res = {
        body: Builder.getStreet(options)
    };
};