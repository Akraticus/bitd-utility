const Builder = require("../Core/Entities/Devil/DevilBuilder.js");
const DataFetcher = require("../Core/Entities/Devil/DevilDataFetcher.js");
const Options = require("../Core/Entities/Devil/Devil.js").DevilOptions;

module.exports = async function (context, req) {
    let params = req.query || req.body || {};
    let options;
    try {
        options = new Options(params);
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error getting options-object:\n\n" + error
        }
        return;
    }

    let data;
    try {
        data = DataFetcher();
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error retrieving data:\n\n" + error
        }
        return;
    }

    try {
        context.res = {
            status: 200,
            body: Builder(data, options)
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing entity:\n\n" + error
        }
    }
};