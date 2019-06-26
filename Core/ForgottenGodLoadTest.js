const Options = require("./DataCarriers/ForgottenGod").ForgottenGodOptions;
const Builder  = require("./Builders/ForgottenGodBuilder.js");


let forgottenGodOptions = new Options();
forgottenGodOptions.cultPracticeAmount = 400;
forgottenGodOptions.cultPracticeType = "bango";
let forgottenGod = Builder.getForgottenGod(forgottenGodOptions);
console.log(forgottenGod);