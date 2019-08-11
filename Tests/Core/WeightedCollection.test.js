const Collection = require("../../Core/DataCarriers/WeightedItems.js").WeightedCollection;

const WeightedValues = [
    {
        value: "test",
        weight: 3
    },
    {
        value: "test",
        weight: 3
    },
    {
        value: "test",
        weight: 3
    },
    {
        value: "test",
        weight: 3
    }
]

const WeightedAggregateValues = [
    {
        value: "test",
        weight: 3,
        isAggregate: true
    },
    {
        value: "test",
        weight: 3,
        isAggregate: true
    },
    {
        value: "test",
        weight: 3,
        isAggregate: true
    },
    {
        value: "test",
        weight: 3,
        isAggregate: true
    }
]

const WeightedAggregateValues_Deeper = [
    {   
        weight: 2,
        value:[
            {
                value: "test",
                weight: 3,
                isAggregate: true
            },
            {
                value: "test",
                weight: 3,
                isAggregate: true
            },
            {
                value: "test",
                weight: 3,
                isAggregate: true
            }
        ] 
    },
    {   
        weight: 2,
        value:[
            {
                value: "test",
                weight: 3,
                isAggregate: true
            },
            {
                value: "test",
                weight: 3,
                isAggregate: true
            },
            {
                value: "test",
                weight: 3,
                isAggregate: true
            }
        ] 
    },
    {   
        weight: 2,
        value:[
            {
                value: "test",
                weight: 3,
                isAggregate: true
            },
            {
                value: "test",
                weight: 3,
                isAggregate: true
            },
            {
                value: "test",
                weight: 3,
                isAggregate: true
            }
        ] 
    }
]

test("Get random element returns defined element", () => {
    let collection = new Collection();
    collection.value = WeightedValues.slice(0);
    
    expect(collection.getRandomElement()).toBeDefined();
    expect(collection.value.length).toBe(WeightedValues.length);
});

test("Splice random element returns defined element, and reduced collection size", () => {
    let collection = new Collection();
    collection.value = WeightedValues.slice(0);
    
    expect(collection.spliceRandomElement()).toBeDefined();
    expect(collection.value.length).toBe(WeightedValues.length - 1);
});

test("Get random element returns defined isAggregate=true element; returns a value combined of two values from the list separated by a space.", () => {
    let collection = new Collection();
    collection.value = WeightedAggregateValues.slice(0);
    var element = collection.getRandomElement()
    expect(element).toBeDefined();
    expect(element.value).toBe("test test");
});

test("Get random element returns defined isAggregate=true element; returns a value combined of two values from the list separated by a space, from deeper collection", () => {
    let collection = new Collection();
    collection.value = WeightedAggregateValues_Deeper.slice(0);
    var element = collection.getRandomElement()
    expect(element).toBeDefined();
    expect(element.value).toBe("test test");
});