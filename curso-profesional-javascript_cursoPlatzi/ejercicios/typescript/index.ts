// Boolean
let muted: boolean = true;
muted = false;

// Number
let age = 6;
let numerador: number = 5;
let denominador: number = 4;
let resultado = numerador / denominador;

// String
let nombre = "Fabio";
let saludo = `Hola mi nombre es ${nombre}`

// Arrays
let family: string[] = [];
family = ["Fabio", "Yulieth", "Alejandro"];
family.push("900");

let peopleAndAges: Array<string | number > = [];
peopleAndAges.push("Fabio");
peopleAndAges.push(32);
peopleAndAges.push("Yulieth");

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Azul
// console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker"
comodin = {type: "Wildcard"}

let someObject: object = {type: "Objetito"}
 
//functions
function add(a:number, b:number): number {
  return a + b;
}

const sum = add(5,10);


function createAdder (a: number): (number) => number {
  return function (b: number){
    return b + a;
  }
}

let addFour = createAdder(4);
let fourPlus6 = addFour(6);
// console.log(fourPlus6);



function fullName(name: string, lastName: string = "Escobar"):string {
  return `${name} ${lastName}`
}

const fabio = fullName("Agente Fabio")
// console.log(fabio);

// Interfaces
enum Hijos{
  Hijo = "Alejando",
  Hija = "Avril"
}

interface Matrimonio {
  marido: string;
  mujer: string;
  hijo?: string
}

let escobarHorta = {
  marido: "Fabio",
  mujer: "Yulieth",
  hijo: Hijos.Hijo
}

console.log(escobarHorta);

function casados(m: Matrimonio): string {
  return `${m.marido} y ${m.mujer}, los declaro marido y mujer`
}

const mensajeCasados = casados(escobarHorta);

console.log(mensajeCasados);

escobarHorta.toString = function () {
  return this.hijo ? `Esposo: ${this.marido}, Esposa: ${this.mujer} Hijo: ${this.hijo}`: `Esposo: ${this.marido}, Esposa: ${this.mujer}`
}

console.log(escobarHorta.toString())

