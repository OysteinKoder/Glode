const greeting = true;

function sayHello(shouldGreet) {
	if (shouldGreet) {
		console.log("Hello");
	} else {
		console.log("Goodbye");
	}
}

sayHello(false);

function character(name, level, spell) {
	// this.name = name;
	// this.level = level;
	// this.spell = spell;
	const name = "Julius";
	const level = 99;
	const spell = "Fireball";
}

const juliesCharacter = new character("Julius", 99, "Fireball");

const juliusCharacter = new character("Julie", 1, "Mending");

console.log(juliesCharacter);
console.log(juliusCharacter);
