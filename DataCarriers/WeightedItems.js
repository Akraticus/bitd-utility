/* A value with an optional weight. A weight is used in a collection of values to determine its probability of being randomly selected.*/
exports.WeightedValue = class WeightedValue{
    constructor(value, weight) {
        this.value = value;
        this.weight = weight == undefined ? 1 : weight;
    }
}

exports.WeightedCollection = class WeightedCollection extends WeightedValue{
    constructor(weight) {
        super(new Array(), weight);
    }

    /** Gets a reference to a random element of a leaf-array of the collection. 
     * Recursively selects random paths down to the leaf-array, and then references a random item of the leaf-array and returns it. */
    getRandomElement(collection){
        if(collection === undefined) collection = this.value;

        if(Array.isArray(collection)){
            // we fill a new array with references to the items in the given collection; multiple references if their weight > 1
            var spreadCollection = new Array();
            collection.forEach(element => {
                for(var i = 0; i < element.weight; i++){
                    spreadCollection.push(element);
                }
            });
    
            // Get a random element from the spread list
            var randomElementIndex = randomIntFromInterval(0, spreadCollection.length - 1);
            var element = spreadCollection[randomElementIndex];
    
            // we recursively try to get random elements from that element, since it can be another collection of weighted elements
            return this.getRandomElement(element);
        }
        else if(Array.isArray( collection.value)){
            return this.getRandomElement(collection.value);
        }
        else{
            return collection;
        }
    }

    /** Splices out a random element of a leaf-array of the collection. 
     * Recursively selects random paths down to the leaf-array, and then splices a random item out of the leaf-array and returns it. */
    spliceRandomElement(collection, parentCollection){
        if(collection === undefined) collection = this.value;
        if(parentCollection === undefined) parentCollection = collection;

        
        if(Array.isArray(collection)){
            // we fill a new array with references to the items in the given collection; multiple references if their weight > 1
            var spreadCollection = new Array();
            collection.forEach(element => {
                for(var i = 0; i < element.weight; i++){
                    spreadCollection.push(element);
                }
            });
    
            // Get a random element from the spread list
            var randomElementIndex = randomIntFromInterval(0, spreadCollection.length - 1);
            var element = spreadCollection[randomElementIndex];
    
            // we recursively try to get random elements from that element, since it can be another collection of weighted elements
            return this.spliceRandomElement(element, collection);
        }
        else if(Array.isArray( collection.value)){
            return this.spliceRandomElement(collection.value, parentCollection);
        }
        else{
            var index = parentCollection.indexOf(collection);
            return parentCollection.splice(index, 1).find(() => true);
        }
    }
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}