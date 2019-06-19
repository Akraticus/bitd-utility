const loader = require("./WeightedCollectionLoader");

const moods = loader.getCollection("mood.json");
console.log(moods);