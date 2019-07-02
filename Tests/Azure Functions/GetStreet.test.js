const Street = require("../../GetStreet/index.js");
const Context = require("../defaultContext.js")

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