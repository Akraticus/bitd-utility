class WeightedValue{
    constructor(value, weight) {
        this.value = value;
        this.weight = weight == undefined ? 1 : weight;
    }
}

class WeightedCollection extends WeightedValue{
    constructor(weight) {
        super(new Array(), weight);
    }
}

function getRandomElementFromWeightedCollection(collection){
    if(Array.isArray(collection)){
        // we fill a new array with references to the items in the given collection; multiple references if their weight > 1
        var spreadCollection = new Array();
        collection.forEach(element => {
            for(var i = 0; i < element.weight; i++){
                spreadCollection.push(element);
            }
        });

        // Get a random element from the spread list
        var randomElementIndex = randomIntFromInterval(1, spreadCollection.length);
        var element = spreadCollection[randomElementIndex];

        // we recursively try to get random elements from that element, since it can be another collection of weighted elements
        return getRandomElementFromWeightedCollection(element);
    }
    else if(Array.isArray( collection.value)){
        return getRandomElementFromWeightedCollection(collection.value);
    }
    else{
        return collection.value;
    }
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

exports.WeightedCollection = WeightedCollection;
exports.WeightedValue = WeightedValue;
exports.getRandomElementFromWeightedCollection = getRandomElementFromWeightedCollection;