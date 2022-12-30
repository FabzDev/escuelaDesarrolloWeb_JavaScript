class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}
	delete(index) {
		const item = this.data[index];
		this.shiftIndex(index);
		delete this.data[this.length - 1];
		this.length--;
		return item;
	}
	shiftIndex(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
	}
	shift() {
		const firstItem = this.data[0];
		this.shiftIndex(0);
		delete this.data[this.length - 1];
		this.length--;
		return firstItem;
	}
	unshift(item) {
		this.unshiftIndex();
		this.data[0] = item;
		this.length++;
		return this.data;
	}
	unshiftIndex() {
		for (let i = this.length; i > 0; i--) {
			this.data[i] = this.data[i - 1];
		}
	}
}
const nombres = new MyArray();
