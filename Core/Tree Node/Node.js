const Random = require("../../Core/Utilities/Utility.js").random;

class Node{
    constructor(params) {
        params = params || {};
        this.value = params.value;
        this.childNodes = params.childNodes || [];
        this.parentNode = params.parentNode;
        this.weight = params.weight || 1;
        this.tags = params.tags || [];
    }

    /**
     * Enforces no-value rule on node with children.
     * Adds input to childNodes-collection, and sets their parentNode as this node.
     * @param  {...Node} nodes 
     */
    addChildNode(...nodes){
        if(!nodes) return;

        for(var node of nodes){
            this.childNodes.push(node);
            node.parentNode = this;
        }

        // enforce no-value on node with children
        this.value = undefined;
    }

    /**
     * Traverses child nodes randomly, taking their weights into consideration, and returning a node at the bottom of the hierarchy.
     * Returns null result on failure.
     * @param  {...Node} nodesToAvoid  Algorithm will not traverse these nodes, or include them as results.
     * @returns {Node}
     */
    getRandomLeafNode(...nodesToAvoid){
        // Avoid using ourself
        if(nodesToAvoid.includes(this)) return null;

        // if we have no children, return self
        if(!this.childNodes) return this;

        let filteredChildNodes = nodesToAvoid.length > 0 ? this.childNodes.filter(v => !nodesToAvoid.includes(v)) : this.childNodes;

        // Return self if we have no children that pass muster
        if(filteredChildNodes.length < 1) return this;

        // Map out the childnodes based on their weights
        let weightMap = [];
        for(let node of filteredChildNodes){
            let weight = node.weight || 0;
            for(var i = weight; i > 0; i--){
                weightMap.push(node);
            }
        }

        let index = Random(0, weightMap.length - 1);
 
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

    /**
     * Creates a copy of the node, transformed by all actionable tags.transformNodeByTags
     * @returns {Node}
     */
    transformByTags(){
        let returnNode = new Node();
        Object.assign(returnNode, this);

        // check leafnode for actionable tags
        for(let tag of this.tags){
            switch(tag.toLowerCase()){
                case "reroll":
                    let root = this.getRootNode();
                    let rerollResult =  root.getRandomLeafNode(this);
                    returnNode.value = returnNode.value.concat(" ",rerollResult.value);
                    break;
            }
        }

        return returnNode;
    }

    /**
     * Traverses parents of all parents recursively, until it reaches a parent without a parent. This is the root node.
     * @returns {Node} 
     */
    getRootNode(){
        // If we have no parent, we are the root
        if(!this.parentNode) return this;

        return this.parentNode.getRootNode();
    }
}

module.exports = Node;