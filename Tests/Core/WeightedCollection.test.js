const Collection = require("../../Core/DataCarriers/WeightedItems.js").WeightedCollection;
const UnweightedValues = [
    "test",
    "test",
    "test",
    "test"
]

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

test("Array with elements without defined weight returns defined element", () => {
    let collection = new Collection();
    collection.value = UnweightedValues.slice(0);
    
    expect(collection.getRandomElement()).toBeDefined();
    expect(collection.value.length).toBe(UnweightedValues.length);
});

test("Get random element returns defined element", () => {
    let collection = new Collection();
    collection.value = WeightedValues.slice(0);
    
    expect(collection.getRandomElement()).toBeDefined();
    expect(collection.value.length).toBe(WeightedValues.length);
});

test("Splice random element returns defined element and reduces collection size", () => {
    let collection = new Collection();
    collection.value = WeightedValues.slice(0);
    
    expect(collection.spliceRandomElement()).toBeDefined();
    expect(collection.value.length).toBe(WeightedValues.length - 1);
});