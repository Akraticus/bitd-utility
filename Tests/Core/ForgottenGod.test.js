const ForgottenGod = require("../../Core/Entities/ForgottenGod/ForgottenGod.js");
const Options = require("../../Core/Entities/ForgottenGod/ForgottenGod.js").ForgottenGodOptions;
const WeightedItems = require("../../Core/DataCarriers/WeightedItems.js");
const WeightedValue = WeightedItems.WeightedValue;
const WeightedCollection = WeightedItems.WeightedCollection;
const Builder  = require("../../Core/Entities/ForgottenGod/ForgottenGodBuilder.js");
const DataFetcher = require("../../Core/Entities/ForgottenGod/ForgottenGodDataFetcher.js");

test("No options construction", () => {
    let data = DataFetcher();
    let forgottenGod = Builder.getForgottenGod(data);
    
    expect(forgottenGod).toBeDefined();
});

test("Cult practice amount equals 3", () => {
    let data = DataFetcher();
    let forgottenGodOptions = new Options();
    
    forgottenGodOptions.cultPracticesAmount = 3;
    let forgottenGod = Builder.getForgottenGod(data, forgottenGodOptions);

    expect(forgottenGod).toBeDefined();
    expect(forgottenGod.cultPractices.length).toEqual(3);
});

test("Cult practice type equals destruction", () => {
    let data = DataFetcher();
    let forgottenGodOptions = new Options();
    
    forgottenGodOptions.cultPracticesAmount = 1;
    forgottenGodOptions.cultPracticeType = "destruction";
    let forgottenGod = Builder.getForgottenGod(data, forgottenGodOptions);

    expect(forgottenGod).toBeDefined();
    expect(forgottenGod.cultPractices.find(() => true).toLowerCase().includes("destruction")).toBe(true);
});

test("Default options are correct", () => {
    let options = new Options();

    expect(options).toBeDefined();
    expect(options.cultPracticesAmount).toBe(1);
    expect(options.cultPracticeType).toBeUndefined();
});

test("Cult practice types array exists and has expected values", () => {
    let expectedValues = new Array();
    expectedValues.push("acquisition");
    expectedValues.push("congregation");
    expectedValues.push("consecration");
    expectedValues.push("desecration");
    expectedValues.push("destruction");
    expectedValues.push("sacrifice");

    expect(ForgottenGod.CultPracticeTypes).toBeDefined();
    expect(ForgottenGod.CultPracticeTypes.value.map(v => v.value)).toEqual(expect.arrayContaining(expectedValues));
});