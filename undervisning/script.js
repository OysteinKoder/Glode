/*
The term "props" is a common naming convention in JavaScript and other programming languages, short for "properties". It's often used as a parameter to pass data or values into a function so that the function can operate on that data. 
*/

// Define a variable with the name "greeting" and set its value to "true" (boolean)
const greeting = true;

// Define a function with the name "sayHello", that takes a parameter "props"
function sayHello(props) {
	// Check if "props" is true
	if (props) {
		// If "props" is true, log "Hello" to the console
		console.log("Hello");
	} else {
		// If "props" is false, log "Goodbye" to the console
		console.log("Goodbye");
	}
}

// Call the "sayHello" function and pass the "greeting" variable as an argument
sayHello(greeting);
// In this case we will log "Hello" as the variable "greeting" is true, but if it was false it would log "Goodbye"

//
//

/*
The therm "this" within the constructor function refers to the newly created object, and the properties (name, level, and spell) are being assigned values based on the arguments provided when the object is instantiated using the new keyword. This is a common way to initialize and set properties of objects when creating instances of a constructor function.
*/

// Define a constructor function "character" with three parameters: "name", "level", and "spell".
function character(name, level, spell) {
	// Inside the constructor, assign the parameters as properties of the object being created
	// this. is what creates the object. And we want the object "name" to have the value of name, etc
	this.name = name;
	this.level = level;
	this.spell = spell;
}

// Create an instance of the 'character' object named 'juliesCharacter' with the specific values
const juliesCharacter = new character("Julius", 99, "Fireball");

// Create another instance of the 'character' object named 'juliusCharacter' with the different values
const juliusCharacter = new character("Julie", 1, "Mending");

// Log the properties of the "juliesCharacter" object to the console
console.log(juliesCharacter);
// Log the properties of the "juliusCharacter" object to the console
console.log(juliusCharacter);
