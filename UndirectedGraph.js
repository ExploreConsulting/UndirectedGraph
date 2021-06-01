//============================================================================
// Undirected Graph Library
//============================================================================

// Node structure:
//   name: string
//   value: number
//   links: Node[]
let Nodes = [];

//==============================================
// Creates a new graph node, given a name and value
//==============================================
function createNode(name, value) {
    Nodes.push({
        name,
        value,
        links: []
    });
}
exports.createNode = createNode;

//==============================================
// Creates an undirected link between two nodes,
// given two existing node names
//==============================================
function connectNodes(name1, name2) {
    const node1 = findNode(name1);
    if (!node1) 
        return console.error(`Unable to find node ${name1}`);

    const node2 = findNode(name2);
    if (!node2) 
        return console.error(`Unable to find node ${name2}`);

    node1.links.push(node2);
    node2.links.push(node1);
}
exports.connectNodes = connectNodes;

//==============================================
// Locates a node by name
//==============================================
function findNode(name) {
    return Nodes.find(node => node.name === name);
}
exports.findNode = findNode;

//==============================================
// Returns the sum of the values of all connected
// nodes in a graph, given a starting node name
//==============================================
function sumNodes(startNodeName) {
}
exports.sumNodes = sumNodes;
