const Options = require("../../Core/Entities/Devil/Devil.js").DevilOptions;
const DataFetcher = require("../../Core/Entities/Devil/DevilDataFetcher.js");
const Builder = require("../../Core/Entities/Devil/DevilBuilder.js");

test("Default options are correct", () => {
    var options = new Options();

    expect(options).toBeDefined();
    expect(options.featuresAmount).toBe(1);
    expect(options.desiresAmount).toBe(1);
    expect(options.summonedHorrorsAmount).toBe(1);
    expect(options.ghostTraitsAmount).toBe(1);
    expect(options.ghostlyEffectsAmount).toBe(1);
});

test("Default construction", () => {
    var data = DataFetcher();
    var devil = Builder(data);

    expect(devil).toBeDefined();
    expect(devil.name).toBeDefined();
    expect(devil.aspect).toBeDefined();
    expect(devil.affinity).toBeDefined();
    expect(devil.features).toBeDefined();
    expect(devil.summonedHorrors).toBeDefined();
    expect(devil.desires).toBeDefined();
    expect(devil.ghostlyEffects).toBeDefined();
    expect(devil.ghostTraits).toBeDefined();
});