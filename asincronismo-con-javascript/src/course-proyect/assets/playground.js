import fetch from "node-fetch";

// function runCode(url) {
// 	if (url.includes("https://")) {
// 		async () => {
// 			try {
// 				const rawData = await fetch(url);
// 				const data = await rawData.json();
// 				console.log(await rawData);
// 			} catch {
// 				throw new Error("Something was wrong");
// 			}
// 		};
// 	} else {
// 		throw Error("Error: Invalid URL");
// 	}
// }

// runCode("https://api.escuelajs.co/api/v1/categories");

export async function runCode(url) {
	if (url.includes("https://") && url !== "https://") {
		try {
			const rawData = await fetch(url);
			const data = await rawData.json();
			console.log(data);
			return data;
		} catch {
			throw Error("Something was wrong");
		}
	} else {
		throw Error("Invalid URL");
	}
}

runCode("https://api.escuelajs.co/api/v1/categories");
