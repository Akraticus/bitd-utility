const loader = require("./WeightedCollectionLoader");
const collection = require("./WeightedItems");

const data = loader.getCollection("use.json");
var element = collection.getRandomElementFromWeightedCollection(data);
console.log(element);