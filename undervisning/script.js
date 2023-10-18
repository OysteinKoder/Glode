// Vi henter et HTML element vi ønsker å modifisere
const container = document.querySelector("#containerID");
console.log(container);

// Vi modifiserer elementet med å legge til styling
container.style.height = "100px";
container.style.border = "2px solid black";

// Vi gir elementet vi hentet innhold
container.textContent = "Hei!";

// En linje med kommentar

/*
Mange
Linjer
Med
Kommentarer
*/

/*
Enten / eller betingelse går inn å tar i mot flere data for å sjekke om det er sant eller usant og gir oss alternativer ut i fra hvilken data vi gir den.
*/

// Sjekker om variabelen userName har en tom eller utfylt (string)
const userName = "Julie";
if (userName === "") {
	console.log("You dont have a username");
} else {
	console.log("You have a username");
}

// Sjekker om variabelen age er mer enn 18 (number)
let age = 26;
if (age < 18) {
	console.log("You are under 18");
} else {
	console.log("You are over 18");
}

// Sjekker om variabelen isUserBlocked er sant eller usant (boolean)
let isUserBlocked = false;
if (isUserBlocked === false) {
	console.log("You are not blocked");
} else {
	console.log("You are blocked");
}

// Sjekker om variabelen isUserLoggedIn er sant eller usant (boolean)
let isUserLoggedIn = false;
if (isUserLoggedIn === true) {
	console.log("You are logged in");
} else {
	console.log("You are not logged in");
}

// Sjekker om variabelen userName er tom eller utfylt OG variabelen age er mer enn 18
// && og || er logiske operatorer som sjekker x AND y(x && y) eller x OR y(x || y)
if (userName === "" && age < 18) {
	console.log("You dont have a username and you are under 18");
} else {
	console.log("You have a username and you are over 18");
}
