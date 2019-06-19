/*
    Trying out loading and saving of objects with weights and an array from a json-file.
    
*/

var fs = require("fs");

let WeightedItem = require("./WeightedItems");
let WeightedCollection = WeightedItem.WeightedCollection;
let WeightedValue = WeightedItem.WeightedValue;

var length = 5;
var collection = new WeightedCollection();
for (let index = 0; index < length; index++) {
    collection.push(new WeightedValue("Test", 2));
}

var data = new Array();

fs.exists("test.json", exists => {
    if(exists){
        try{
            var readData = fs.readFileSync("test.json");
            data = JSON.parse(readData);
            console.log("Read success!");
        }
        catch{
            console.log("Read failure!");
        }    
        
        Object.setPrototypeOf(data, Array.prototype);
        data = data.map(v => {
            var item = new WeightedCollection();
            Object.assign(item, v);
            return item;
        });
    }
    
    data.push(collection);
    console.log(data);
    
    fs.writeFileSync("test.json", JSON.stringify(data));
});


