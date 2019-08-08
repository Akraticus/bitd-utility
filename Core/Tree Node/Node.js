const Random = require("../../Core/Utilities/Utility.js").random;

class Node{
    constructor(params) {
        params = params || {};
        this.data = params.data;
        this.childNodes = params.childNodes || [];
        this.parentNode = params.parentNode;
        this.weight = params.weight || 1;
    }

    addChildNode(...nodes){
        for(var node of nodes){
            this.childNodes.push(node);
            node.parentNode = this;
        }
    }

    getRandomLeafNode(...nodesToAvoid){
        // Avoid using ourself
        if(nodesToAvoid.includes(this)) return null;

        // if we have no children, return self
        if(!this.childNodes) return this;

        let filteredChildNodes = nodesToAvoid.length > 0 ? this.childNodes.filter(v => !nodesToAvoid.includes(v)) : this.childNodes;

        // Return self if we have no children that pass muster
        if(filteredChildNodes.length < 1) return this;

        // Map out the childnodes based on their weights
        let weightMap = filteredChildNodes.map(v => new Array(v.weight).fill(v));
        weightMap = weightMap.reduce((prev, curr) => 
        {
            prev.push(...curr);
            return prev;
        });
        let index = Random(0, weightMap.length - 1);
        3
 
        // return a random node from the randomly selected childNode
        while(weightMap.length > 0){
            // return if we found a viable leaf node
            let leaf = weightMap[index].getRandomLeafNode(...nodesToAvoid);
            if(leaf) return leaf;

            // filter out all instances of the choice that returned undefined result, and try again
            weightMap = weightMap.filter(v => v === weightMap[index]);
        }
        
        // we didn't find any suitable leaf nodes
        return null;
    }

    getRootNode(){
        // If we have no parent, we are the root
        if(!this.parentNode) return this;

        return this.parentNode.getRootNode();
    }
}

module.exports = Node;