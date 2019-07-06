const Options = require("../../Core/Entities/Street/Street.js").StreetOptions;
const Builder  = require("../../Core/Entities/Street/StreetBuilder.js");
const DataFetcher = require("../../Core/Entities/Street/StreetDataFetcher.js");

test("No options construction", () => {
    let data = DataFetcher();
    let street = Builder.getStreet(data);
    expect(street).toBeDefined();
});

test("Details amount equals 3", () => {
    let data = DataFetcher();
    let options = new Options();
    options.detailsAmount = 3

    let street = Builder.getStreet(data, options);
    expect(street).toBeDefined();
    expect(street.details.length).toBe(3);
});

test("Props amount equals 3", () => {
    let data = DataFetcher();
    let options = new Options();
    options.propsAmount = 3;

    let street = Builder.getStreet(data, options);
    expect(street).toBeDefined();
    expect(street.props.length).toBe(3);
});

test("Sights amount equals 3", () => {
    let data = DataFetcher();
    let options = new Options();
    options.sightsAmount = 3;

    let street = Builder.getStreet(data, options);
    expect(street).toBeDefined();
    expect(street.impressions.sights.length).toBe(3);
});

test("Smells amount equals 3", () => {
    let data = DataFetcher();
    let options = new Options();
    options.smellsAmount = 3;

    let street = Builder.getStreet(data, options);
    expect(street).toBeDefined();
    expect(street.impressions.smells.length).toBe(3);
});

test("Sounds amount equals 3", () => {
    let data = DataFetcher();
    let options = new Options();
    options.soundsAmount = 3;

    let street = Builder.getStreet(data, options);
    expect(street).toBeDefined();
    expect(street.impressions.sounds.length).toBe(3);
});