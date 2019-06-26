const ForgottenGod = require("../DataCarriers/ForgottenGod.js");
const Loader = require("../WeightedCollectionLoader.js");

/** Builds a ForgottenGod data-object based on the provided options. If no options are provided, defaults are used. */
exports.getForgottenGod = function getStreet(forgottenGodOptions){
    // undefined => load defaults
    forgottenGodOptions = forgottenGodOptions === undefined ? new ForgottenGod.ForgottenGodOptions() : forgottenGodOptions;

    Loader.setDirectory("Data/Forgotten God");
    let names = Loader.getCollection("names.json");
    let cultPracticeTypes = ForgottenGod.CultPracticeTypes;

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

    // CULT PRACTICES
    let cultPracticeType = forgottenGodOptions.cultPracticeType;
    for(var i = 0; i < forgottenGodOptions.cultPracticeAmount; i++){
        
        // if the current cultPracticeType doesn't exist, get a new one
        if(cultPracticeTypes.value.findIndex(v => v.value === cultPracticeType) == -1){
            // if there are no more cult practice types, we break
            if(cultPracticeTypes.length <= 0) break;
            cultPracticeType = cultPracticeTypes.getRandomElement().value.toLowerCase();
        }

        // push a new random element from a cult practice list; 
        // if the list is empty, we remove it from available cult practice types and will get a new one at the beginning of the iteration
        switch(cultPracticeType){

            case "acquisition":
                {
                    if(acquisitions.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(acquisitions.spliceRandomElement().value);
                    break;
                }
            case "congregation":
                {
                    if(congregations.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(congregations.spliceRandomElement().value);
                    break;
                }
            case "consecration":
                {
                    if(consecrations.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(consecrations.spliceRandomElement().value);
                    break;
                }
            case "desecration":
                {
                    if(desecrations.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(desecrations.spliceRandomElement().value);
                    break;
                }
            case "destruction":
                {
                    if(destructions.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(destructions.spliceRandomElement().value);
                    break;
                }
            case "sacrifice":
                {
                    if(sacrifices.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(sacrifices.spliceRandomElement().value);
                    break;
                }
        }
    }

    return forgottenGod;
}

function removeFromCollection(element, collection){
    var index = collection.value.findIndex(v => v.value === element);
    collection.value.splice(index, 1);
}