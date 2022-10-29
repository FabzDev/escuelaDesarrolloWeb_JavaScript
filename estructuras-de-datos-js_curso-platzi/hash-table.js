class HashTable {
	constructor() {
		this.bucket = [];
	}
	insert(obj) {
		this.bucket.push(obj);
	}
	search(key) {
		if (this.bucket[key]) {
			const searching = this.bucket[key];
			return searching;
		} else {
			console.log("El key ingresado no existe");
		}
	}
	delete(key) {
		this.bucket.splice(key, 1);
		return this.bucket;
	}
}

const test = new HashTable();
test.insert({ mandarinas: 20 });
test.insert({ cerezas: 100 });
test.insert({ papas: 30 });
test.insert({ lechuga: 17 });
test.insert({ tomate: 11 });
