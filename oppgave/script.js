// Dette er en funksjon som er satt opp for å bli utløst via en onclick når "Konvert"-knappen i HTML klikkes.
function unitConverter() {
	/*
	Event.preventDefault er en metode som brukes for å hindre standard oppførsel på en nettside. I dette tilfellet forhindrer den at et skjema blir nullstilt når knappen klikkes. "e" er "event" som en forkortelse. Begrepet "event" er utdatert, men vi bruker det for klarhet, til tross for en strek gjennom feilen.
	*/
	// event.preventDefault();

	/*
	Vi definerer variabler som henter informasjon fra HTML-dokumentet inne i funksjonen.
	Dette gjør vi slik at verdiene vi henter oppdateres hver gang knappen klikkes.
	*/
	// Hent verdien fra et element med ID "myInputID".
	const myInput = document.querySelector("#myInputID").value;
	console.log(myInput); // Logg verdien til konsollen for feilsøking.

	// Hent verdien fra et element med ID "fromValueID".
	const fromValue = document.querySelector("#fromValueID").value;
	console.log(fromValue); // Logg verdien til konsollen for feilsøking.

	// Hent verdien fra et element med ID "toValueID".
	const toValue = document.querySelector("#toValueID").value;
	console.log(toValue); // Logg verdien til konsollen for feilsøking.

	// Hent verdien fra et element med ID "displayValueID".
	const displayValue = document.querySelector("#displayValueID");
	console.log(displayValue); // Logg verdien til konsollen for feilsøking.

	// Vi setter opp en tom variabel for å lagre resultatet som beregnes i de påfølgende if/else-setningene.
	let result;

	/* 
	En if/else-setning som sjekker om "fromValue" og "toValue" variablene matcher, slik at riktig matematisk operasjon kan utføres.
	*/
	if (fromValue === "cm" && toValue === "m") {
		result = myInput / 100; // Konverter centimeter til meter.
	} else if (fromValue === "cm" && toValue === "km") {
		result = myInput / 100000; // Konverter centimeter til kilometer.
	} else if (fromValue === "m" && toValue === "cm") {
		result = myInput * 100; // Konverter meter til centimeter.
	} else if (fromValue === "m" && toValue === "km") {
		result = myInput / 1000; // Konverter meter til kilometer.
	} else if (fromValue === "km" && toValue === "cm") {
		result = myInput * 100000; // Konverter kilometer til centimeter.
	} else if (fromValue === "km" && toValue === "m") {
		result = myInput * 1000; // Konverter kilometer til meter.
	} else {
	}

	// Når vi har et resultat fra if / else utrykket ønsker vi å vise det på nettsiden våres.
	// Vi bruker ".toFixed()" for å begrense antall desimaler i resultatet til 3.
	displayValue.textContent = result.toFixed(3);
}
