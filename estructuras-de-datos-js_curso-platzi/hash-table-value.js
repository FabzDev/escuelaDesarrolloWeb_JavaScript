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
		const address = this.hashMethod(key);
		const currentBucket = this.bucket[address];
		if (currentBucket) {
			if (currentBucket.length > 1) {
				// Inicio de Logica para colisiones:
				for (let i = 0; i < currentBucket.length; i++) {
					if (currentBucket[i][0] == key) {
						return currentBucket[i][1];
					}
				}
				// Fin de Logica para colisiones:
			} else if (currentBucket[0][0] == key) {
				return currentBucket[0][1];
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
test.get("Yulieth");
