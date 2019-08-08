const Node = require("../../Core/Tree Node/Node.js");
const TreeBuilder = require("../../Core/Tree Node/TreeBuilder.js");

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

test("SearchTree - Node: getRandomLeafNode() while avoiding self returns null", () => {
    let node = new Node();
    let data = node.getRandomLeafNode(node);
    expect(data).toBe(null);
});

test("SearchTree - Node: getRootNode() without parent returns self", () => {
    let node = new Node();
    let data = node.getRootNode();
    expect(data).toBe(node);
});

test("SearchTree - Node: getRandomLeafNode() returns node with data", () => {
    let root = TreeBuilder.createRootFromCollection(WeightedValuesDepth2);
    expect(root).toBeDefined();
    expect(root.childNodes).toBeDefined();

    let result = root.getRandomLeafNode();
    expect(result).toBeDefined();
    expect(result.data).toBeDefined();
});

test("SearchTree - Node: getRootNode() from random node returns the original root node", () => {
    let root = TreeBuilder.createRootFromCollection(WeightedValuesDepth2);
    expect(root).toBeDefined();
    expect(root.childNodes).toBeDefined();

    let result = root.getRandomLeafNode();
    expect(result).toBeDefined();
    expect(result.data).toBeDefined();

    let verifyRoot = result.getRootNode();
    expect(verifyRoot).toBe(root);
});

const TwoValues = [
    {
        value: "test1",
        weight: 3
    },
    {
        value: "test2",
        weight: 3
    }
]

test("SearchTree - Node: getRandomLeafNode() ignore given node from a collection of two nodes, and return expected node", () => {
    let root = TreeBuilder.createRootFromCollection(TwoValues);

    let firstNode = root.getRandomLeafNode();
    expect(firstNode).toBeDefined();
    expect(firstNode.data).toBeDefined();

    let secondNode = root.getRandomLeafNode(firstNode);
    expect(secondNode).toBeDefined();
    expect(secondNode.data).toBeDefined();
    expect(secondNode).not.toBe(firstNode);
});