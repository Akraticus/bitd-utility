const ForgottenGod = require("../../GetForgottenGod/index.js");
const Context = require("../defaultContext.js")

test("Optional cult practices amount set to 3 produces 3 cult practices in output", async () => {
    var context = Context;
    await ForgottenGod(context, {query: { cultPracticesAmount:3}});
    var response = context.res;

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    
    var god = response.body;
    expect(god).toBeDefined();
    expect(god.cultPractices).toBeDefined();
    expect(god.cultPractices.length).toBe(3);
});