const FsUtility = require("../../Core/Utilities/FsUtility.js");

test("FsUtility read json file", () => {
    let jsonString = FsUtility.getFromFileSystemSync("Tests", "Core", "TestCollection.json");
    expect(jsonString).toBeDefined();
});