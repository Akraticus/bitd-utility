const Value = require("../../Core/DataCarriers/WeightedItems.js").WeightedValue;

test("Default WeightedValue constructor sets correct fields.", () => {
    var element = new Value();
    expect(element).toBeDefined();
    expect(element.value).toBeUndefined();
    expect(element.weight).toBe(1);
    expect(element.isAggregate).toBe(false);
});

test("WeightedValue constructor sets correct fields.", () => {
    var element = new Value("test", 2);
    expect(element).toBeDefined();
    expect(element.value).toBe("test");
    expect(element.weight).toBe(2);
    expect(element.isAggregate).toBe(false);
});