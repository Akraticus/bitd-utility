const Options = require("./DataCarriers/Entities.js").StreetOptions;
const Builder  = require("./Builders/StreetBuilder.js");

let options = new Options();
options.detailsAmount = -3;
options.propsAmount = -3;
let street = Builder.getStreet(options);
console.log(street);