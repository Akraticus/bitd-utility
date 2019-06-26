const Options = require("./DataCarriers/ForgottenGod").ForgottenGodOptions;
const Builder  = require("./Builders/ForgottenGodBuilder.js");


let forgottenGodOptions = new Options();
forgottenGodOptions.cultPracticeAmount = 3;
forgottenGodOptions.cultPracticeType = undefined;
let forgottenGod = Builder.getForgottenGod(forgottenGodOptions);
console.log(forgottenGod);