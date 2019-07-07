const ForgottenGod = require("../Core/DataCarriers/ForgottenGod.js");

module.exports = async function (context, req) {
    try {
        context.res = {
            status: 200,
            body: ForgottenGod.CultPracticeTypes
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error getting cult practice types:\n\n" + error
        }
    }
    
};