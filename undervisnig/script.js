/* Sjekker om .js filen er koblet til .html filen */
// console.log("Hello World")

/* INTRODUKSJON TIL DOM MANIPULATION */

/* Brukt DOMM for å hente elementer laget i HTML dokumentet */
const myDiv = document.querySelector("#div");
console.log(myDiv);

const myH1 = document.querySelector("#h1");
console.log(myH1);

const myP = document.querySelector("#p");
console.log(myP);

/* INTRODUKSJON TIL VARIABLER */

/* Variabel med Const kan ikke endres */
const userName = "Julie";
// userName = "Julius";
console.log(userName);

/* Variabel med Let kan endres på */
let age = 26;
age = 27;
console.log(age);

/* Booleans er en sant/usant sjekker */
const isItFriday = false;
console.log(isItFriday);
const isItMonday = true;
console.log(isItMonday);

/* Vi kan slå sammen variabler */
const greet = "God morgen";
const myName = "Julie";
const greeting = greet + " " + myName;
console.log(greeting);

/* Byggesteinene til en kalkulator */
let numberOne = 10;
let numberTwo = 3;
let sum = numberOne + numberTwo;
console.log(sum);

/* INTRODUKSJON TIL FUNKSJONER */

/* En funksjon tar i mot en kodeblokk som ikke aktiveres før funksjonsnavnet er kalt */
function multiply() {
	let numberThree = 5;
	let numberFour = 5;
	let newSum = numberThree * numberFour;
	console.log(newSum);
}
multiply();
