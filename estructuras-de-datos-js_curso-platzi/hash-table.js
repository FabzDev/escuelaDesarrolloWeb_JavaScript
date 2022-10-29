class HashTable {
	constructor(size) {
		this.bucket = new Array(size);
	}
	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	insert(key, value) {
		const address = this.hashMetod[key];
		if (!this.bucket[address]) {
			this.bucket[address] = [];
		} else {
			this.bucket[address].push([key, value]);
		}
		return this.data;
	}
}
