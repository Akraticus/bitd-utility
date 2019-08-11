const Building = require("../../GetBuilding/index.js");
const Context = require("../defaultContext.js")

test("No options building construction", async () => {
    var context = Context;
    await Building(context, {});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var building = response.body;
    expect(building).toBeDefined();
    expect(building.items).toBeDefined();
    expect(building.items.length).toBe(0);
    expect(building.use).toBeDefined();
    expect(building.exterior.details).toBeDefined();
    expect(building.exterior.details.length).toBe(0);
    expect(building.exterior.materials).toBeDefined();
    expect(building.exterior.materials.length).toBe(0);
});

test("Options respected: 3 items, 2 exterior details, use type rare", async () => {
    var context = Context;
    await Building(context, {query: { itemsAmount:3, detailsAmount: 2, useType: "RAre"}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var building = response.body;
    expect(building).toBeDefined();
    expect(building.items).toBeDefined();
    expect(building.items.length).toBe(3);
    expect(building.use).toBeDefined();
    expect(building.exterior).toBeDefined();
    expect(building.exterior.details).toBeDefined();
    expect(building.exterior.details.length).toBe(2);
    expect(building.exterior.materials).toBeDefined();
    expect(building.exterior.materials.length).toBe(0);
});