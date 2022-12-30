function solution(string, query) {
	return string.toLowerCase().includes(query.toLowerCase());
}

console.log(solution("Ana lava la tina", "ana"));
console.log(solution("Santiago", "TIAGO"));
console.log(solution("Nicolas", "ana"));
