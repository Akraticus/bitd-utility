const DevilEntity = require("./Devil.js");

module.exports = function(devilData, devilOptions){
    if(devilData === undefined) return null;
    devilOptions = devilOptions || new DevilEntity.DevilOptions();

    let devil = new DevilEntity.Devil();

    // NAME
    devil.name = devilData.names.spliceRandomElement().value;

    // AFFINITY
    devil.affinity = devilData.affinities.spliceRandomElement().value;

    // ASPECT
    devil.aspect = devilData.aspects.spliceRandomElement().value;
    
    // FEATURE
    for(var i = 0; i < devilOptions.featuresAmount; i++){
        var newElement = devilData.features.spliceRandomElement().value;
        if(!newElement)  break;

        devil.features.push(newElement);
    }

    // DESIRES
    for(var i = 0; i < devilOptions.desiresAmount; i++){
        var newElement = devilData.desires.spliceRandomElement().value;
        if(!newElement)  break;

        devil.desires.push(newElement);
    }

    // SUMMONED HORRORS
    for(var i = 0; i < devilOptions.summonedHorrorsAmount; i++){
        var newElement = devilData.summonedHorrors.spliceRandomElement().value;
        if(!newElement)  break;

        devil.summonedHorrors.push(newElement);
    }

    // GHOST TRAITS 
    for(var i = 0; i < devilOptions.ghostTraitsAmount; i++){
        var newElement = devilData.ghostTraits.spliceRandomElement().value;
        if(!newElement)  break;

        devil.ghostTraits.push(newElement);
    }

    // GHOST TRAITS 
    for(var i = 0; i < devilOptions.ghostlyEffectsAmount; i++){
        var newElement = devilData.ghostlyEffects.spliceRandomElement().value;
        if(!newElement)  break;

        devil.ghostlyEffects.push(newElement);
    }

    return devil;
}