const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.len = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
		this.len++;
	}

	pop() {
		if(this.isEmpty()) return;
		let node = this.detachRoot();
		this.restoreRootFromLastInsertedNode(node);
		this.shiftNodeDown(this.root);
		return node.data;
	}

	detachRoot() {
		let root = this.root;
		if (this.parentNodes.indexOf(root) != -1){
			this.parentNodes.shift();
		}
		this.root = null;
		this.len--;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.len;
	}

	isEmpty() {
		return this.len == 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.len = 0;
	}

	insertNode(node) {
		if(!this.root){
			this.root = node;
			this.parentNodes.push(node);
			return;
		}

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
