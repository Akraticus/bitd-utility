const fs = require("fs");
const path = require("path");
const weightedItems = require("./DataCarriers/WeightedItems.js");
const WeightedValue = weightedItems.WeightedValue;
const WeightedCollection = weightedItems.WeightedCollection;

let root = "Core";
let directory = "Data";

function getCollection(filename){
    var finalPath = path.join(root, directory, filename);
    if(!fs.existsSync(finalPath)) return null;

    var data = fs.readFileSync(finalPath);
    var parsed = JSON.parse(data);
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
    directory = dir;
}

exports.getCollection = getCollection;
exports.prototypeReviver = prototypeReviver;
exports.setDirectory = setDirectory;