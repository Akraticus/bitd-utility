const ForgottenGod = require("./ForgottenGod.js");

/** Builds a ForgottenGod data-object based on the provided options. If no options are provided, defaults are used. */
exports.getForgottenGod = function getStreet(forgottenGodData, forgottenGodOptions){
    if(forgottenGodData === undefined) return;

    // undefined => load defaults
    forgottenGodOptions = forgottenGodOptions === undefined ? new ForgottenGod.ForgottenGodOptions() : forgottenGodOptions;

    let forgottenGod = new ForgottenGod.ForgottenGod();

    // NAME
    let name = forgottenGodData.names.spliceRandomElement();
    forgottenGod.name = name === undefined ? "" : name.value;

    // CULT PRACTICES
    let cultPracticeTypes = ForgottenGod.CultPracticeTypes;
    let cultPracticeTypeIndex = findIndexOfElement(forgottenGodOptions.cultPracticeType, cultPracticeTypes);

    // this means we'll get a new cult practice type for each iteration
    if(cultPracticeTypeIndex < 0) forgottenGodOptions.cultPracticeType = undefined; 

    // if the given option doesn't exist in the list of cult practice types, get a random one
    let cultPracticeType = cultPracticeTypeIndex < 0 
        ? cultPracticeTypes.getRandomElement().value.toLowerCase() 
        : cultPracticeTypes.value[cultPracticeTypeIndex].value.toLowerCase();
    
    for(var i = 0; i < forgottenGodOptions.cultPracticesAmount; i++){
        
        // if the cultPracticeType option was unset, get a new one
        // if the current cultPracticeType doesn't exist, get a new one
        if(!forgottenGodOptions.cultPracticeType || findIndexOfElement(cultPracticeType, cultPracticeTypes) == -1){
            // if there are no more cult practice types, we break
            if(cultPracticeTypes.length <= 0) break;
            cultPracticeType = cultPracticeTypes.getRandomElement().value.toLowerCase();
        }

        // push a new random element from a cult practice list; 
        // if the list is empty, we remove it from available cult practice types and will get a new one at the beginning of the iteration
        switch(cultPracticeType){

            case "acquisition":
                {
                    if(forgottenGodData.acquisitions.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(forgottenGodData.acquisitions.spliceRandomElement().value);
                    break;
                }
            case "congregation":
                {
                    if(forgottenGodData.congregations.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(forgottenGodData.congregations.spliceRandomElement().value);
                    break;
                }
            case "consecration":
                {
                    if(forgottenGodData.consecrations.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(forgottenGodData.consecrations.spliceRandomElement().value);
                    break;
                }
            case "desecration":
                {
                    if(forgottenGodData.desecrations.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(forgottenGodData.desecrations.spliceRandomElement().value);
                    break;
                }
            case "destruction":
                {
                    if(forgottenGodData.destructions.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(forgottenGodData.destructions.spliceRandomElement().value);
                    break;
                }
            case "sacrifice":
                {
                    if(forgottenGodData.sacrifices.length <= 0){
                        removeFromCollection(cultPracticeType, cultPracticeTypes);
                        break;
                    }
                    forgottenGod.cultPractices.push(forgottenGodData.sacrifices.spliceRandomElement().value);
                    break;
                }
        }
    }

    return forgottenGod;
}

function findIndexOfElement(element, collection){
    if(!element) return -1;

    element = element.toLowerCase();
    return collection.value.findIndex(v => v.value.toLowerCase() === element)
}

function removeFromCollection(element, collection){
    var index = findIndexOfElement(element, collection);
    collection.value.splice(index, 1);
}