const ForgottenGod = require("../DataCarriers/ForgottenGod.js");
const Loader = require("../WeightedCollectionLoader.js");

/** Builds a ForgottenGod data-object based on the provided options. If no options are provided, defaults are used. */
exports.getForgottenGod = function getStreet(forgottenGodOptions){
    // undefined => load defaults
    forgottenGodOptions = forgottenGodOptions === undefined ? new ForgottenGod.ForgottenGodOptions() : forgottenGodOptions;

    Loader.setDirectory("Data/Forgotten God");
    let names = Loader.getCollection("names.json");
    let cultPracticeTypes = Loader.getCollection("cult_practice_types.json");

    Loader.setDirectory("Data/Forgotten God/Cult Practices");
    
    let acquisitions = Loader.getCollection("acquisition_practices.json");
    let consecrations = Loader.getCollection("consecration_practices.json");
    let congregations = Loader.getCollection("congregation_practices.json");
    let desecrations = Loader.getCollection("desecration_practices.json");
    let destructions = Loader.getCollection("destruction_practices.json");
    let sacrifices = Loader.getCollection("sacrifice_practices.json");

    let forgottenGod = new ForgottenGod.ForgottenGod();

    // NAME
    forgottenGod.name = names.spliceRandomElement().value;

    // CULT PRACTICE TYPE
    let cultPracticeType = "";
    if(forgottenGodOptions.cultPracticeType){
        cultPracticeType = forgottenGodOptions.cultPracticeType.toLowerCase();
        if(!cultPracticeTypes.find(v => v.value.toLowerCase() === cultPracticeType)){
            cultPracticeType = cultPracticeTypes.getRandomElement().value.toLowerCase();
        }
    }
    else {
        cultPracticeType = cultPracticeTypes.getRandomElement().value.toLowerCase();
    }

    // CULT PRACTICES
    for(var i = 0; i < forgottenGodOptions.cultPracticeAmount; i++){
        switch(cultPracticeType){

            case "acquisition":
                {
                    forgottenGod.cultPractices.push(acquisitions.spliceRandomElement().value);
                    break;
                }
            case "congregation":
                {
                    forgottenGod.cultPractices.push(congregations.spliceRandomElement().value);
                    break;
                }
            case "consecration":
                {
                    forgottenGod.cultPractices.push(consecrations.spliceRandomElement().value);
                    break;
                }
            case "desecration":
                {
                    forgottenGod.cultPractices.push(desecrations.spliceRandomElement().value);
                    break;
                }
            case "destruction":
                {
                    forgottenGod.cultPractices.push(destructions.spliceRandomElement().value);
                    break;
                }
            case "sacrifice":
                {
                    forgottenGod.cultPractices.push(sacrifices.spliceRandomElement().value);
                    break;
                }
        }
    }

    return forgottenGod;
}