const Options = require("../../Core/Entities/Street/Street.js").StreetOptions;
const Builder  = require("../../Core/Entities/Street/StreetBuilder.js");
const DataFetcher = require("../../Core/Entities/Street/StreetDataFetcher.js");

test("Local street construction", () => {
    let data = DataFetcher();
    let options = new Options();
    options.detailsAmount = 2;
    options.propsAmount = 400;
    let street = Builder.getStreet(data, options);
});
