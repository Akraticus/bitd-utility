const StreetOptions = require("./Entities.js").StreetOptions;
const Builder  = require("./StreetBuilder.js");

let streetOptions = new StreetOptions();
streetOptions.detailsAmount = -3;
streetOptions.propsAmount = -3;
let street = Builder.getStreet(streetOptions);
console.log(street);