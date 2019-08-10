const TreeNode = require("../Tree Node/Node.js");

/**
 * Takes a collection of arbitrary depth, and converts it to a tree-structure.
 * @param {[]} collection 
 * @returns {TreeNode} The top node; the root.
 */
function createRootFromCollection(collection){    
    if(!collection) return null;

    let array = collection;
    // If it's not a regular array, or a WeightedCollection-type array, we break out
    if(!Array.isArray(collection)){
        if(Array.isArray(collection.value)) array = collection.value;
        else return null;
    }
    if(array.length < 1) return null;

    let childNodes = this.createNodesFromCollection(array);
    let root = combineRoots(...childNodes);
    if(collection.weight) root.weight = collection.weight;

    return root;
}

/**
 * Takes a collection of arbitrary depth, and converts it to a collection of nodes.
 * @param {[]} collection 
 * @returns {TreeNode[]}
 */
function createNodesFromCollection(collection){
    let nodes = [];

    // if it's a weightedcollection, we reference the array it contains
    if(!Array.isArray(collection)){
        if(Array.isArray(collection.value)) collection = collection.value;
        else return nodes;  // invalid input; return empty array
    }

    for(let element of collection){
        let node = new TreeNode();

        // sets weight, value and tags if they exist
        Object.assign(node, element);
        
        // if the value was an array, we recursively get childnodes from them
        if(Array.isArray(node.value)){
            var childNodes = createNodesFromCollection(node.value);
            node.addChildNode(...childNodes);
        }

        nodes.push(node);
    }

    return nodes;
}

/**
 * Takes any amount of nodes, and 
 * @param  {...TreeNode} roots 
 * @returns {TreeNode}
 */
function combineRoots(...roots){
    let combinedRoot = new TreeNode();
    for(var root of roots){
        combinedRoot.addChildNode(root);
    }
    return combinedRoot;
}

module.exports = { createNodesFromCollection, createRootFromCollection, combineRoots}