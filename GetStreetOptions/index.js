const Options = require("../DataCarriers/Entities.js").StreetOptions;

module.exports = async function (context, req) {
    context.res = {
        body: new Options()
    }
};