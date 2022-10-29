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
	get(key) {
		for (let i = 0; i < this.bucket.length; i++) {
			if (this.bucket[i]) {
				if (this.bucket[i][this.bucket[i].length - 1][0] == key) {
					console.log(i);
					return i;
				}
			}
		}
	}
}
const test = new HashTable(100);
test.insert("Fabio", 1990);
test.insert("Yulieth", 1996);
test.insert("Alejandro", 2023);
test.insert("Laurita", 1995);
test.insert("Giova", 2001);
test.insert("Fabio Fernando", 1966);
