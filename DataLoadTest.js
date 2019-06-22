const StreetOptions = require("./DataCarriers/Entities.js/index.js").StreetOptions;
const Builder  = require("./Builders/StreetBuilder.js/index.js");

let streetOptions = new StreetOptions();
streetOptions.detailsAmount = -3;
streetOptions.propsAmount = -3;
let street = Builder.getStreet(streetOptions);
console.log(street);