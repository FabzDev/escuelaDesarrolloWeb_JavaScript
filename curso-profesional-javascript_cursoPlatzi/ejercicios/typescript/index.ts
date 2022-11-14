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
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker"
comodin = {type: "Wildcard"}

let someObject: object = {type: "Objetito"}
 
//functions
function add(a:number, b:number): number {
  return a + b;
}

add(5,10);
