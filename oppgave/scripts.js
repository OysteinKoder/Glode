console.log("Hello World!");

// Hente HTML element
const plusButton = document.querySelector("#plusButton");
console.log(plusButton);
const minusButton = document.querySelector("#minusButton");
console.log(minusButton);

// Vi må sette opp variabler som rekner
let count = 0;

// Lage funksjoner til knappene
function increment() {
	count = count + 1;
	console.log(count);
}
increment();
increment();
increment();
increment();
increment();

function decrement() {
	count = count - 1;
	console.log(count);
}
decrement();
decrement();
increment();
increment();
