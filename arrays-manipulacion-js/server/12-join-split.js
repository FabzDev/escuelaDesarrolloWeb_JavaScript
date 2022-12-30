const elements = ["Fire", "Air", "Water"];

const separator = "--";
const joined = elements.join(separator);

const title = "Curso de manipulación de arrays";
const splited = title.split(" ").join("-").toLocaleLowerCase();
console.log(splited);

function solution(title) {
	return title.toLowerCase().split(" ").join("-");
}
console.log(solution("La forma de correr Python"));
console.log(solution("La API para nunca parar de aprender"));
console.log(solution("Curso de arrays"));
