const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap();
		this.maxSize = maxSize;
	}

	push(data, priority) {
		if(this.size() == this.maxSize){
			throw new Error("queue has max size");
		}
		else{
			this.heap.push(data,priority);
		}

	}

	shift() {
		if(this.isEmpty()){
			throw new Error("queue is empty");
		}
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
