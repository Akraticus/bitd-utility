const Builder = require("../Builders/StreetBuilder.js");
const Entities = require("../DataCarriers/Entities.js");
const Options = Entities.StreetOptions;

module.exports = async function (context, req) {
    var options = new Options(req.params);

    context.res = {
        body: Builder.getStreet(options)
    };
};