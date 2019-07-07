const Builder = require("../Core/Entities/Street/StreetBuilder.js");
const Options = require("../Core/Entities/Street/Street.js").StreetOptions;
const DataFetcher = require("../Core/Entities/Street/StreetDataFetcher.js");

module.exports = async function (context, req) {
    var params = req.query || req.body || {};
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
            body: Builder.getStreet(data, options)
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing entity:\n\n" + error
        }
    }    
};