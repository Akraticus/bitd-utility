const fs = require("fs");
const path = require("path");
const weightedItems = require("./WeightedItems");
const WeightedValue = weightedItems.WeightedValue;
const WeightedCollection = weightedItems.WeightedCollection;

let directory = "Data";

function getCollection(filename){
    var finalPath = path.join(directory, filename);
    console.log("Final path: " + finalPath);
    if(!fs.existsSync(finalPath)) return null;

    var data = fs.readFileSync(finalPath);
    var parsed = JSON.parse(data);
    prototypeReviver(parsed);

    return parsed;
}

function prototypeReviver(object){
    if(object.value === undefined) return object;

    if(typeof object.value == Array){
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