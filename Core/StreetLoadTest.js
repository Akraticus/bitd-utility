const Options = require("./DataCarriers/Street.js").StreetOptions;
const Builder  = require("./Builders/StreetBuilder.js");

let options = new Options();
options.detailsAmount = 2;
options.propsAmount = 1;
let street = Builder.getStreet(options);
console.log(street);