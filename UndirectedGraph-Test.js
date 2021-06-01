//============================================================================
// Test Suite for Undirected Graph Library
//============================================================================
const Graph = require('./UndirectedGraph');
const assert = require('assert');

//----------------------------------------------
// Create some test nodes
//----------------------------------------------

Graph.createNode('A', 3);
Graph.createNode('B', 8);
Graph.createNode('C', 1);
Graph.createNode('D', 2);
Graph.createNode('E', 4);
Graph.createNode('F', 7);
Graph.createNode('G', 8);
Graph.createNode('H', 10);
Graph.createNode('I', 2);
Graph.createNode('J', 5);

Graph.createNode('K', 25);
Graph.createNode('L', 7);

// Main graph
Graph.connectNodes('A', 'B');
Graph.connectNodes('A', 'E');
Graph.connectNodes('B', 'C');
Graph.connectNodes('B', 'G');
Graph.connectNodes('C', 'D');
Graph.connectNodes('C', 'I');
Graph.connectNodes('D', 'E');
Graph.connectNodes('F', 'E');
Graph.connectNodes('F', 'J');
Graph.connectNodes('G', 'H');
Graph.connectNodes('H', 'I');
Graph.connectNodes('I', 'J');

// Isolated graph
Graph.connectNodes('K', 'L');

//==============================================
// Tests
//==============================================
const sum1 = Graph.sumNodes('D');
console.log(`Sum 1 = ${sum1}`);
assert(sum1 === 50);

const sum2 = Graph.sumNodes('K');
console.log(`Sum 2 = ${sum2}`);
assert(sum2 === 32);