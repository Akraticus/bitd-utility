const fs = require("fs");
const path = require("path");
const weightedItems = require("./WeightedItems");
const WeightedValue = weightedItems.WeightedValue;
const WeightedCollection = weightedItems.WeightedCollection;

let directory = "Data";

function getCollection(filename){
    var finalPath = path.join(directory, filename);
    if(!fs.existsSync(finalPath)) return null;

    var data = fs.readFileSync(finalPath);
    var parsed = JSON.parse(data);
    parsed.forEach(wc => prototypeReviver(wc));

    return parsed;
}

function prototypeReviver(object){
    if(object.value === undefined) return object;

    if(Array.isArray(object.value)){
        Object.setPrototypeOf(object, WeightedCollection.prototype);
        object.value.forEach(v => prototypeReviver(v));
    }
    else{
        Object.setPrototypeOf(object, WeightedValue.prototype);
    }
}

function setDirectory(dir){
    directory = dir;
}

exports.getCollection = getCollection;
exports.prototypeReviver = prototypeReviver;
exports.setDirectory = setDirectory;