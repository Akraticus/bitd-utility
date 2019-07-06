const weightedItems = require("../DataCarriers/WeightedItems.js");
const WeightedValue = weightedItems.WeightedValue;
const WeightedCollection = weightedItems.WeightedCollection;

function getCollection(jsonString){
    if(jsonString === undefined) return undefined;

    var parsed = JSON.parse(jsonString);
    if(parsed === undefined) return undefined;

    parsed = parsed.map(v => prototypeReviver(v));
    parsed = prototypeReviver(parsed);

    return parsed;
}

function prototypeReviver(object){
    if(object === undefined) return;

    if(Array.isArray(object)){
        var collection = new WeightedCollection();
        collection.value = object;
        return collection;

    }
    else if(Array.isArray(object.value)){
        Object.setPrototypeOf(object, WeightedCollection.prototype);
        object.value.forEach(v => prototypeReviver(v));
        return object;
    }
    else{
        Object.setPrototypeOf(object, WeightedValue.prototype);
        return object;
    }
}

function setDirectory(dir){
    this.directory = dir;
}

function setRoot(root){
    this.root = root;
}

exports.getCollection = getCollection;
exports.prototypeReviver = prototypeReviver;
exports.setDirectory = setDirectory;
exports.setRoot = setRoot;