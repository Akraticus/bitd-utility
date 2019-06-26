const Street = require("../Core/DataCarriers/Street.js");

module.exports = async function (context, req) {
    context.res = {
        body: new Street.Street()
    }
};