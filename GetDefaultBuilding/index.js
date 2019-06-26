const Building = require("../Core/DataCarriers/Building.js");

module.exports = async function (context, req) {
    context.res = {
        body: new Building.Building()
    }
};