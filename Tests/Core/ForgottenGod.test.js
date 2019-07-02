const Options = require("../../Core/Entities/ForgottenGod/ForgottenGod.js").ForgottenGodOptions;
const Builder  = require("../../Core/Entities/ForgottenGod/ForgottenGodBuilder.js");
const DataFetcher = require("../../Core/Entities/ForgottenGod/ForgottenGodDataFetcher.js");

test("Test local forgotten god construction", () => {
    let data = DataFetcher();
    
    let forgottenGodOptions = new Options();
    forgottenGodOptions.cultPracticesAmount = 400;
    forgottenGodOptions.cultPracticeType = undefined;
    let forgottenGod = Builder.getForgottenGod(data, forgottenGodOptions);
    expect(forgottenGod).toBeDefined();
});
