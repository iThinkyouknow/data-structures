/**
Material are from https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7
Trees are made up of nodes and links.

											Root node
										/	link / edge	\
parent node / internal node        leaf node (no child)
			/       						\
child node < sibling node > child node


Root: the topmost node of the tree, which never has any links or edges connecting to it
Link/Edge: the reference that a parent node contains that tells it what its child node is
Child: any node that has a parent node that links to it
Parent: any node that has a reference or link to another node
Sibling: any group of nodes that are the children of the same node
Internal: any node that has a child node (basically all parent nodes)
Leaf: any node that does not have a child node in the tree

Axioms
1. n nodes === (n-1) links
2. 1 root node
3. Trees are recursive data structures

Depth of node === the number of links it takes to reach a particular node
Height of node === the max number of links to reach the furthest leaf

Balanced tree = 2 sibling sub trees not differing in *height* by more than 1 level
Unblanced tree !== balanced tree
**/

/**
node {
	val: <any>
	left: node / null
	right: node / null
}

tree: {
	nodes: node
	depth: function
	height: Number
	is_balanced: Bool
	add_node: function
	remove_node: function
}
**/
/** 
Creation of tree in code will be done for a binary tree because the rules make it more constrained and thus easier. 
A binary tree or one with rules also makes it more usable
**/
