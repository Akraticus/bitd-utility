const Builder = require("../Core/Entities/Devil/DevilBuilder.js");
const DataFetcher = require("../Core/Entities/Devil/DevilDataFetcher.js");
const Options = require("../Core/Entities/Devil/Devil.js").DevilOptions;

module.exports = async function (context, req) {
    try {
         context.res = {
             status: 200,
             body: new Options()
         }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing default Devil options object:\n\n" + error
        }
    }
};