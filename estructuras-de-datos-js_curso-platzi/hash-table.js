class HashTable {
	constructor(size) {
		this.bucket = new Array(size);
	}
	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.bucket.length;
		}
		return hash;
	}

	insert(key, value) {
		const address = this.hashMethod(key);
		if (!this.bucket[address]) {
			this.bucket[address] = [];
		}
		this.bucket[address].push([key, value]);
		return this.bucket;
	}
}
const test = new HashTable(100);
test.insert("Fabio", 1990);
