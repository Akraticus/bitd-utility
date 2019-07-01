const Builder = require("../Core/Builders/Building/BuildingBuilder.js");
const DataFetcher = require("../Core/Builders/Building/BuildingDataFetcher.js");
const Options = require("../Core/DataCarriers/Building.js").BuildingOptions;

module.exports = async function (context, req) {
    var params = req.body ? req.body : req.query;
    let data;
    try 
    {
        data = DataFetcher.getForgottenGodData();
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