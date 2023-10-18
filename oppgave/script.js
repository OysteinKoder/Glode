// En funksjon som er satt opp til å bli aktivert via en onclick på Konvert-knappen i HTML
function unitConverter() {
	/* event.preventDefault er en metode vi setter inn som hindrer nettsiden fra å gjøre det den default ønsker å gjøre. I dette tilfellet er det å avslutte at form resetter når vi trykker på knappen. event = e. Ordet event er deprecated fordi de ønsker vi skal bruke e istedenfor som en forkortelse. Jeg anbefaler å bruke ordet, selv om det vil komme en strek igjennom. Bare vi er obs på hvorfor det er en error  */
	// event.preventDefault();

	// Vi setter opp variablene som henter informasjon fra HTML dokumentet inne i funksjonen, for vi ønsker at verdiene vi henter skal bli oppdatert for hver gang vi trykker på knappen.
	const myInput = document.querySelector("#myInputID").value;
	console.log(myInput);
	const fromValue = document.querySelector("#fromValueID").value;
	console.log(fromValue);
	const toValue = document.querySelector("#toValueID").value;
	console.log(toValue);
	const displayValue = document.querySelector("#displayValueID");
	console.log(displayValue);

	// Vi setter opp en tom variabel som skal ta i mot resultatet vi setter opp under i if / else utrykk.
	let result;

	// Et if / else utrykk som sjekker om verdien vi har gitt stemmer over ens med verdien vi ønsker
	// I denne betegnelsen sjekker vi om fromValue og toValue stemmer så vi kan gi korrekt mattestykke som skal regnes ut
	if (fromValue === "cm" && toValue === "m") {
		result = myInput / 100;
	} else if (fromValue === "cm" && toValue === "km") {
		result = myInput / 100000;
	} else if (fromValue === "m" && toValue === "cm") {
		result = myInput * 100;
	} else if (fromValue === "m" && toValue === "km") {
		result = myInput / 1000;
	} else if (fromValue === "km" && toValue === "cm") {
		result = myInput * 100000;
	} else if (fromValue === "km" && toValue === "m") {
		result = myInput * 1000;
	} else {
	}

	// Når vi har et resultat fra if / else utrykket ønsker vi å vise det på nettsiden våres.
	// Vi la til .toFixed() som går inn å begrenser hvor mange desimaltall vi ønsker i resultatet våres
	displayValue.textContent = result.toFixed(3);
}
