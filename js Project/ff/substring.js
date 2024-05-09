
/*let text = "javaScript is a language";

let substringtext = text.substring(4, 10);


console.log(substringtext);


let slice = text.slice(4, 10);

console.log(slice);*/


let display = document.querySelector("#input");

let button = document.querySelector("#delbtn");

button.addEventListener("click", function (event) {

	let text = display.value;

	display.value  = text.substring(0, text.length-1);
})