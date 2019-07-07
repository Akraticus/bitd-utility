const Devil = require("../../GetDevil/index.js");
const DevilOptions = require("../../GetDevilOptions/index.js");
const Context = require("../defaultContext.js");

test("No options devil object construction", async () => {
    await Devil(Context, {});

    var response = Context.res;
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var devil = response.body;
    expect(devil).toBeDefined();
    expect(devil.name).toBeDefined();
    expect(devil.affinity).toBeDefined();
    expect(devil.aspect).toBeDefined();
    expect(devil.desires).toBeDefined();
    expect(devil.features).toBeDefined();
    expect(devil.ghostlyEffects).toBeDefined();
    expect(devil.ghostTraits).toBeDefined();
    expect(devil.summonedHorrors).toBeDefined();
});

test("Options respected: 2 desires, 3 ghostly effects, 4 summoned horrors", async () => {
    await Devil(Context, { query: {desiresAmount: 2, ghostlyEffectsAmount: 3, summonedHorrorsAmount:4 }});

    var response = Context.res;
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var devil = response.body;
    expect(devil).toBeDefined();
    expect(devil.name).toBeDefined();
    expect(devil.affinity).toBeDefined();
    expect(devil.aspect).toBeDefined();
    expect(devil.desires).toBeDefined();
    expect(devil.desires.length).toBe(2);
    expect(devil.features).toBeDefined();
    expect(devil.ghostlyEffects).toBeDefined();
    expect(devil.ghostlyEffects.length).toBe(3);
    expect(devil.ghostTraits).toBeDefined();
    expect(devil.summonedHorrors).toBeDefined();
    expect(devil.summonedHorrors.length).toBe(4);
});

test("Get Default options", async () => {
    await DevilOptions(Context, {});

    expect(Context.res).toBeDefined();
    expect(Context.res.status).toBe(200);
    expect(Context.res.body).toBeDefined();
});