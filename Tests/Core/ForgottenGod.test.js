const ForgottenGod = require("../../Core/Entities/ForgottenGod/ForgottenGod.js");
const Options = require("../../Core/Entities/ForgottenGod/ForgottenGod.js").ForgottenGodOptions;
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