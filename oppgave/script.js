// Import the "themeToggle" function from a module located in "themeToggle.js"
import { themeToggle } from "./themeToggle.js";

// Find and store a reference to the <button> element in the document
// In this instance I have directly targeted the element, normally we would target an ID or class name
const button = document.querySelector("button");

// Add an event listener to the button, listening for a "click" event, and preforming the function when activated
button.addEventListener("click", themeToggle);
