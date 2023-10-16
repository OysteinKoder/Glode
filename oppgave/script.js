// En funksjon som er satt opp til å bli aktivert via en onclick på Konvert-knappen i HTML
function unitConverter() {
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
	// Denne blir jobbet mer på i undervisningen onsdag.
	if (fromValue === "cm" && toValue === "m") {
		result = myInput * 10;
	}

	// Når vi har et resultat fra if / else utrykket ønsker vi å vise det på nettsiden våres.
	displayValue.textContent = result;
}
