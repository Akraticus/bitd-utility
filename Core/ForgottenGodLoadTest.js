const Options = require("./DataCarriers/ForgottenGod").ForgottenGodOptions;
const Builder  = require("./Builders/ForgottenGod/ForgottenGodBuilder.js/index.js");


let forgottenGodOptions = new Options();
forgottenGodOptions.cultPracticeAmount = 400;
forgottenGodOptions.cultPracticeType = undefined;
let forgottenGod = Builder.getForgottenGod(forgottenGodOptions);
console.log(forgottenGod);