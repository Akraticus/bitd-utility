const Builder = require("../Core/Entities/Building/BuildingBuilder.js");
const DataFetcher = require("../Core/Entities/Building/BuildingDataFetcher.js");
const Options = require("../Core/Entities/Building/Building.js").BuildingOptions;

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
    try 
    {
        data = DataFetcher();
    } catch (error) 
    {
        context.res = {
            status: 500,
            body: "Error retrieving data."
        }
        return;
    }

    try 
    {
        
        var entity = Builder.getBuilding(data, options)
        context.res = {
            status: 200,
            body: entity
        };
    } catch (error) 
    {
        context.res = {
            status: 500,
            body: "Error constructing entity."
        }
    }
};