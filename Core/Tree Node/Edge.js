class Edge{
    constructor(params) {
        params = params || {};

        this.parentNode = params.parentNode;
        this.childNode = params.childNode;
    }
}

module.exports = Edge;