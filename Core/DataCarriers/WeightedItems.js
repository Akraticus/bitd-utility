/* A value with an optional weight. A weight is used in a collection of values to determine its probability of being randomly selected.*/
class WeightedValue{
    constructor(value, weight) {
        this.value = value;
        this.weight = weight || 1;
    }
}

class WeightedCollection extends WeightedValue{
    constructor(weight) {
        super(new Array(), weight);
    }

    /** Gets a reference to a random element of a leaf-array of the collection. 
     * Recursively selects random paths down to the leaf-array, and then references a random item of the leaf-array and returns it. */
    getRandomElement(collection, previousCollections, callback){
        if(!collection) collection = this.value;
        if(!previousCollections) previousCollections = new Array();
        

        if(Array.isArray(collection)){
            previousCollections.push(collection);

            // we fill a new array with references to the items in the given collection; multiple references if their weight > 1
            var spreadCollection = new Array();
            collection.forEach(element => {
                // if weight is undefined, default to single iteration
                var weight = element.weight || 1;
                for(var i = 0; i < weight; i++){
                    spreadCollection.push(element);
                }
            });
    
            // Get a random element from the spread list
            var randomElementIndex = randomIntFromInterval(0, spreadCollection.length - 1);
            var element = spreadCollection[randomElementIndex];
    
            // this means that the collection has been emptied
            if(!element) return undefined;
            
            // we recursively try to get random elements from that element, since it can be another collection of weighted elements
            return this.getRandomElement(element, previousCollections, callback);
        }
        else if(Array.isArray( collection.value)){
            return this.getRandomElement(collection.value, previousCollections, callback);
        }
        else{
            if(callback){
                callback(collection, previousCollections);
            }

            var returnValue = new WeightedValue();
            Object.assign(returnValue, collection);
            if(returnValue.isAggregate){
                // We only want to loop in here once, so if the root collection is contained in the previousCollection-array twice, we break out
                if(previousCollections.filter(c => c === this.value).length > 1) return returnValue;

                var newElement = this.getRandomElement(previousCollections[0], previousCollections);
                returnValue.value = returnValue.value.concat(" ", newElement.value);
            }

            return returnValue;
        }
    }

    /** Splices out a random element of a leaf-array of the collection. 
     * Recursively selects random paths down to the leaf-array, and then splices a random item out of the leaf-array and returns it. */
    spliceRandomElement(){
        var callBack = (value, previousCollections) => {
            var lastCollection = previousCollections[previousCollections.length - 1];
            var index = lastCollection.indexOf(value);
            value = lastCollection.splice(index, 1).find(() => true);
        };
        return this.getRandomElement(this.value, null, callBack);
    }

    get length(){
        return this.value.length;
    }
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

exports.WeightedValue = WeightedValue;
exports.WeightedCollection = WeightedCollection;