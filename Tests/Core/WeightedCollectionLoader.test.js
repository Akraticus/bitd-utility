const Loader = require("../../Core/Utilities/WeightedCollectionLoader.js");
const FsUtility = require("../../Core/Utilities/FsUtility.js");

test("WeightedCollectionLoader load collection from json string", () => {
    let jsonString = FsUtility.getFromFileSystemSync("Tests", "Core", "TestCollection.json");
    expect(jsonString).toBeDefined();

    let collection = Loader.getCollection(jsonString);
    expect(collection).toBeDefined();
});
