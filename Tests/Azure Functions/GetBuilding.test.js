const Building = require("../../GetBuilding/index.js");
const Context = require("../defaultContext.js")

test("Optional items amount set to 3 produces 3 items in output", async () => {
    var context = Context;
    await Building(context, {query: { itemsAmount:3}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var building = response.body;
    expect(building).toBeDefined();
    expect(building.items).toBeDefined();
    expect(building.items.length).toBe(3);
});