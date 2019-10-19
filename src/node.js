class Node {
	constructor(data, priority) {
		this.right = null;
		this.left = null;
		this.parent = null;
		this.priority = priority;
		this.data = data;
	}

	appendChild(node) {
		if(!this.left){
			this.left = node;
			node.parent = this;
		}else if(!this.right){
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if(node == this.left){
			this.left = null;
			node.parent = null;
		}else if(node == this.right){
			this.right = null;
			node.parent = null;
		}else {
			throw new Error("passed node is not a child of this node");
		}

	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this);
		} 
	}

	swapWithParent() {
		if(!this.parent) return;
		let parent = this.parent;
		let grandparent = parent.parent;
		let right = this.right;
		let left = this.left;

			if(grandparent){
				if(parent === grandparent.left){
					grandparent.left = this;
				}else if(parent === grandparent.right){
					grandparent.right = this;
				}
			}
	
			if(this.parent){
				this.parent.parent = this;
				if(this === this.parent.right){
					if(this.parent.left){
						this.parent.left.parent = this;
						this.left = this.parent.left;
					}
					this.right = this.parent;
				}else{
					if(this.parent.right){
						this.parent.right.parent = this;
						this.right = this.parent.right;
					}
					this.left = this.parent;
				}
				if(right){
					right.parent = this.parent;
					this.parent.right = right;
				}else{
					this.parent.right = null;
				}
	
				if(left){
					left.parent = this.parent;
					this.parent.left = left;
				}else{
					this.parent.left = null;
				}
				this.parent = grandparent;
			}
	
	}	
}

module.exports = Node;
