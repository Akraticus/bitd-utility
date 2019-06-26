const Options = require("../Core/DataCarriers/Street.js").StreetOptions;

module.exports = async function (context, req) {
    context.res = {
        body: new Options()
    }
};