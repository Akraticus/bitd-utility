const Street = require("../../GetStreet/index.js");
const StreetOptions = require("../../GetStreetOptions/index.js");
const Context = require("../defaultContext.js")

test("No options GetStreet response", async () => {
    var context = Context;
    await Street(context, {});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var street = response.body;
    expect(street).toBeDefined();
    expect(street.props).toBeDefined();
});

test("Optional prop amount set to 5 produces 5 props in output", async () => {
    var context = Context;
    await Street(context, {query: { propsAmount:5}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var street = response.body;
    expect(street).toBeDefined();
    expect(street.props).toBeDefined();
    expect(street.props.length).toBe(5);
});

test("Optional details amount set to 3 produces 3 details in output", async () => {
    var context = Context;
    await Street(context, {query: { detailsAmount: 3}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var street = response.body;
    expect(street).toBeDefined();
    expect(street.details).toBeDefined();
    expect(street.details.length).toBe(3);
});

test("Optional sights amount set to 3 produces 3 sights in output", async () => {
    var context = Context;
    await Street(context, {query: { sightsAmount: 3}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var street = response.body;
    expect(street).toBeDefined();
    expect(street.impressions.sights).toBeDefined();
    expect(street.impressions.sights.length).toBe(3);
});

test("Optional sounds amount set to 3 produces 3 sounds in output", async () => {
    var context = Context;
    await Street(context, {query: { soundsAmount: 3}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var street = response.body;
    expect(street).toBeDefined();
    expect(street.impressions.sounds).toBeDefined();
    expect(street.impressions.sounds.length).toBe(3);
});

test("Optional smells amount set to 3 produces 3 smells in output", async () => {
    var context = Context;
    await Street(context, {query: { smellsAmount: 3}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var street = response.body;
    expect(street).toBeDefined();
    expect(street.impressions.smells).toBeDefined();
    expect(street.impressions.smells.length).toBe(3);
});

test("Get default street options", async () => {
    var context = Context;
    await StreetOptions(context);
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    expect(response.body).toBeDefined();
});