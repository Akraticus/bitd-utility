const ForgottenGod = require("../Core/DataCarriers/ForgottenGod.js");
const DataFetcher = require("../Core/Builders/ForgottenGod/ForgottenGodDataFetcher.js");
const Builder = require("../Core/Builders/ForgottenGodBuilder.js");
const Options = ForgottenGod.ForgottenGodOptions;

module.exports = async function (context, req) {
    var params = req.query ? req.query : req.body || {};

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
        let options = new Options(params);
        var entity = Builder.getForgottenGod(data, options);
        context.res = {
            body: entity
        }    
    } catch (error) 
    {
        context.res = {
            status: 500,
            body: "Error constructing entity."
        }
    }
};