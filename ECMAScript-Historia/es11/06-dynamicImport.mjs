const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
	const module = await import("./module.mjs");
	console.log(module);
	module.hello();
});
