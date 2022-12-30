class HashTable {
	constructor(size) {
		this.bucket = new Array(size);
	}

	//Metodo Hash (para obtenerlo)
	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.bucket.length;
		}
		return hash;
	}

	//Metodo insert
	insert(key, value) {
		const address = this.hashMethod(key);
		if (!this.bucket[address]) {
			this.bucket[address] = [];
		}
		this.bucket[address].push([key, value]);
		return this.bucket;
	}

	//Metodo insert
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
			} else if (currentBucket[0][0] == key) {
				return currentBucket[0][1];
			}
		}
	}

	//Metodo delete
	delete(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.bucket[address];
		if (currentBucket) {
			if (currentBucket.length > 1) {
				// Inicio de Logica para colisiones:
				for (let i = 0; i < currentBucket.length; i++) {
					if (currentBucket[i][0] == key) {
						delete currentBucket[i];
					}
				}
			} else if (currentBucket[0][0] == key) {
				delete currentBucket[0];
			}
		}
	}

	//Metodo allKeys
	allKeys() {
		let allkeys = [];
		for (let i = 0; i < this.bucket.length; i++) {
			let actualBucket = this.bucket[i];
			if (actualBucket) {
				if (actualBucket.length > 1) {
					// Inicio de Logica para colisiones:
					for (let j = 0; j < this.bucket[i].length; j++) {
						allkeys.push(actualBucket[j][0]);
					}
				} else {
					allkeys.push(actualBucket[0][0]);
				}
			}
		}
		return allkeys;
	}
}

const test = new HashTable(100);
test.insert("Fabio", 1990);
test.insert("Yulieth", 1996);
test.insert("Alejandro", 2023);
test.insert("Laurita", 1995);
test.insert("Giova", 2001);
test.insert("Fabio Fernando", 1966);
test.allKeys();
