const Node = require("../Tree Node/Node.js");

function createRootFromCollection(collection){    
    let root = new Node({ "weight": collection.weight });

    // If it's not a regular array, or a WeightedCollection-type array, we break out
    if(!Array.isArray(collection)){
        if(Array.isArray(collection.value)) collection = collection.value;
        else return null;
    }

    let childNodes = this.createNodesFromCollection(collection);
    childNodes.forEach(v => v.parentNode = root);
    root.childNodes = childNodes;

    return root;
}

function createNodesFromCollection(collection){
    let nodes = [];

    // if it's a weightedcollection, we reference the array it contains
    if(!Array.isArray(collection)){
        if(Array.isArray(collection.value)) collection = collection.value;
        else return nodes;  // invalid input; return empty array
    }

    for(let element of collection){
        let node = new Node({"weight":element.weight});
        
        if(Array.isArray(element.value)){
            var childNodes = createNodesFromCollection(element.value);
            childNodes.forEach(v => v.parentNode = node);
            node.childNodes = childNodes;
        }
        else node.data = element.value;

        nodes.push(node);
    }

    return nodes;
}

function combineRoots(...roots){
    let combinedRoot = new Node();
    for(var root of roots){
        combinedRoot.addChildNode(root);
    }
    return combinedRoot;
}

module.exports = { createNodesFromCollection, createRootFromCollection, combineRoots}