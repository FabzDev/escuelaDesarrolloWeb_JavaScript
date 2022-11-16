// Establecer "this" usando "call"
function saludar() {
	console.log(`Hola soy ${this.name} ${this.apellido}`);
}

const fabio = {
	name: "Fabio",
	apellido: "Escobar",
};

saludar.call(fabio);

// Establecer "this" usando "call" y pasar argumentos a la funcion
function caminar(metros, direccion) {
	console.log(`${this.name} ${this.apellido} camina ${metros} metros hacia el ${direccion}`);
}

caminar.call(fabio, 400, "norte");

// Establecer "this" usando "apply" y pasar argumentos a la funcion
const valores = [800, "noreste"];
// caminar.apply(fabio, [800, "noreste"]);
caminar.apply(fabio, valores);

/* 
call - comma
apply - array
*/

// Establecer "this" en una nueva funcion usando "bind"
const alejandro = { name: "Alejandro", apellido: "Escobar" };
const chicoSaludo = saludar.bind(alejandro);

const chicoCamina = caminar.bind(fabio);
chicoCamina(1000, "oeste");
// Cuándo es útil usar uno de estos métodos
