const Options = require("../Core/Entities/Street/Street.js").StreetOptions;

module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: new Options()
    }
};