console.log("Hello World!");

// Hente HTML element
const displayNumber = document.querySelector("#displayNumberID");
console.log(displayNumber);
const plusButton = document.querySelector("#plusButtonID");
console.log(plusButton);
const minusButton = document.querySelector("#minusButtonID");
console.log(minusButton);

// Vi må sette opp variabler som regner
let count = 0;

// Lage funksjoner til knappene
function increment() {
	count = count + 1;
	console.log(count);
	displayNumber.textContent = count;
}

// En funksjon som tar i mot variablelen count og gjør et regnestykke som blir lagt til i nettsiden med textContent
function decrement() {
	count = count - 1;
	console.log(count);
	displayNumber.textContent = count;
}

// Denne event lytteren tar en allerede laget funksjon som sitt andre parament
plusButton.addEventListener("click", increment);

minusButton.addEventListener("click", decrement);
