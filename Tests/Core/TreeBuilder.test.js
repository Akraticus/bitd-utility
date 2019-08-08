const TreeBuilder = require("../../Core/Tree Node/TreeBuilder.js");

const WeightedValuesDepth1 = [
    {
        value: "test",
        weight: 3
    },
    {
        value: "test",
        weight: 3
    },
    {
        value: "test",
        weight: 3
    },
    {
        value: "test",
        weight: 3
    }
]

const WeightedValuesDepth2 = [
    {
        value: [
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            }
        ],
        weight: 3
    },
    {
        value: [
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            }
        ],
        weight: 3
    },
    {
        value: [
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            }
        ],
        weight: 3
    },
    {
        value: [
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            },
            {
                value: "test",
                weight: 3
            }
        ],
        weight: 3
    }
]

test("SearchTree - TreeBuilder: createRootFromCollection() on non-array input returns null response", () => {
    let result = TreeBuilder.createRootFromCollection({});
    expect(result).toBe(null);
});

test("SearchTree - TreeBuilder: createRootFromCollection() on undefined input returns null response", () => {
    let result = TreeBuilder.createRootFromCollection(undefined);
    expect(result).toBe(null);
});

test("SearchTree - TreeBuilder: createRootFromCollection() with weighted collection of depth 1 returns same amount of nodes", () => {
    let result = TreeBuilder.createRootFromCollection(WeightedValuesDepth1);
    expect(result.parentNode).toBeUndefined();  // should be root; parentless
    expect(result.weight).toBe(1);  // the default
    expect(result.data).toBeUndefined();    // contains no data of its own, only leads to children
    expect(result.childNodes.length).toBe(WeightedValuesDepth1.length);
});

test("SearchTree - TreeBuilder: createNodesFromCollection() with weighted collection of depth 2 returns same amount of nodes", () => {
    let result = TreeBuilder.createNodesFromCollection(WeightedValuesDepth2);
    expect(result.length).toBe(WeightedValuesDepth2.length);
    
    let parentNode = result.find(() => true);
    let childNode = parentNode.childNodes.find(() => true);
    expect(childNode.parentNode).toBe(parentNode);
});

test("SearchTree - TreeBuilder: createNodesFromCollection() on non-array input returns null response", () => {
    let result = TreeBuilder.createNodesFromCollection({});
    expect(result.length).toBe(0);
});

test("SearchTree - TreeBuilder: createNodesFromCollection() on empty array input returns empty array", () => {
    let result = TreeBuilder.createNodesFromCollection({});
    expect(result.length).toBe(0);
});

test("SearchTree - TreeBuilder: createNodesFromCollection() with weighted collection of depth 1 returns same amount of nodes", () => {
    let result = TreeBuilder.createNodesFromCollection(WeightedValuesDepth1);
    expect(result.length).toBe(WeightedValuesDepth1.length);
});

test("SearchTree - TreeBuilder: combineRoots() has expected childnodes", () => {
    let root1 = TreeBuilder.createRootFromCollection(WeightedValuesDepth1);
    let root2 = TreeBuilder.createRootFromCollection(WeightedValuesDepth1);
    let combinedRoots = TreeBuilder.combineRoots(root1, root2);
    let allNodes = [];
    for(var root of combinedRoots.childNodes){
        allNodes.push(...root.childNodes);
    }

    expect(combinedRoots.childNodes.length).toBe(2);
    expect(allNodes.length).toBe(root1.childNodes.length + root2.childNodes.length);
    expect(root1.childNodes).toEqual(expect.arrayContaining(allNodes));
    expect(root2.childNodes).toEqual(expect.arrayContaining(allNodes));
});