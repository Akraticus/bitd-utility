const Builder = require("../Core/Builders/StreetBuilder.js");
const Options = require("../Core/DataCarriers/Street.js").StreetOptions;

module.exports = async function (context, req) {
    var options = new Options(req.params);

    context.res = {
        body: Builder.getStreet(options)
    };
};