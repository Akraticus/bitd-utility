const ScoreBuilder = require("../Core/Entities/Score/ScoreBuilder.js");
const ScoreDataFetcher = require("../Core/Entities/Score/ScoreDataFetcher.js");;
const Options = require("../Core/Entities/Score/Score.js").ScoreOptions;

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
        data = ScoreDataFetcher();
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
            body: ScoreBuilder(data, options)
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error constructing entity:\n\n" + error
        }
    }
};