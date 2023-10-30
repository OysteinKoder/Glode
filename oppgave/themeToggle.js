// Define a function named "themeToggle"
export function themeToggle() {
	// Find and store a reference to the <body> element in the document
	// In this instance I have directly targeted the element, normally we would target an ID or class name
	const body = document.querySelector("body");

	// Toggle the class "darkMode" on the <body> element
	body.classList.toggle("darkMode");

	// Logging a message to the console indicating that the button was clicked
	console.log("Button clicked?");
}
