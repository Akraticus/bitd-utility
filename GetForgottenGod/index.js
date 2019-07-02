const DataFetcher = require("../Core/Entities/ForgottenGod/ForgottenGodDataFetcher.js");
const Builder = require("../Core/Entities/ForgottenGod/ForgottenGodBuilder.js");
const Options = require("../Core/Entities/ForgottenGod/ForgottenGod.js").ForgottenGodOptions;

module.exports = async function (context, req) {
    var params = req.query || req.body;

    let data;
    try 
    {
        data = DataFetcher();
    } catch (error) 
    {
        context.res = {
            status: 500,
            body: "Error retrieving data:\n\n" + error
        }
    }
    
    try 
    {
        let options = new Options(params);
        var entity = Builder.getForgottenGod(data, options);
        context.res = {
            status:200,
            body: entity
        }    
    } catch (error) 
    {
        context.res = {
            status: 500,
            body: "Error constructing entity:\n\n" + error
        }
    }
};