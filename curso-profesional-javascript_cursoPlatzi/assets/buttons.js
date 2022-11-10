// NodeList
const buttons = document.getElementsByClassName("boton");

Array.prototype.forEach.call(buttons, (button) => {
	button.onClick = () => alert("Nunca pares de aprender");
});
