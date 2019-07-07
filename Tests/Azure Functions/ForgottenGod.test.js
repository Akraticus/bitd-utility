const ForgottenGod = require("../../GetForgottenGod/index.js");
const Context = require("../defaultContext.js")

test("No options forgotten god construction", async () => {
    await ForgottenGod(Context, {});
    var response = Context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var god = response.body;
    expect(god).toBeDefined();
    expect(god.name).toBeDefined();
    expect(god.cultPractices).toBeDefined();
});

test("Optional cult practices amount set to 3 produces 3 cult practices in output", async () => {
    await ForgottenGod(Context, {query: { cultPracticesAmount:3}});
    var response = Context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var god = response.body;
    expect(god).toBeDefined();
    expect(god.name).toBeDefined();
    expect(god.cultPractices).toBeDefined();
    expect(god.cultPractices.length).toBe(3);
});

test("Cult practice type equals destruction", async () => {
    await ForgottenGod(Context, {query: {cultPracticeType:"destruction", cultPracticesAmount:1}});

    var response = Context.res;
    expect(response).toBeDefined();
    expect(response.body).toBeDefined();
    expect(response.body.cultPractices.find(() => true).toLowerCase().includes("destruction")).toBe(true);
});