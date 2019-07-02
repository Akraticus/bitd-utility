const Builder = require("../Core/Entities/Building/BuildingBuilder.js");
const DataFetcher = require("../Core/Entities/Building/BuildingDataFetcher.js");
const Options = require("../Core/Entities/Building/Building.js").BuildingOptions;

module.exports = async function (context, req) {
    var params = req.body ? req.body : req.query;
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
    }

    try 
    {
        var options = new Options(params);
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