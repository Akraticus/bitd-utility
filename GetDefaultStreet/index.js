const Entities = require("../DataCarriers/Entities.js");

module.exports = async function (context, req) {
    context.res = {
        body: new Entities.Street()
    }
};