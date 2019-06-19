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

exports.WeightedCollection = WeightedCollection;
exports.WeightedValue = WeightedValue;