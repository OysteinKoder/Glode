// Arrays
const myArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(myArray);
console.table(myArray);

// Objects
const myObject = {
  nameKey: "John",
  surnameKey: "Doe",
  ageKey: 30,
};
console.log(myObject);

// 1. Simple example of how to use JavaScript to manipulate the DOM

// Get the element with an id of "text-example" and save it to a variable
const textExample = document.querySelector("#text-example");

// Change the text of the element to "Hello World!"
textExample.innerHTML = "Hello World!";

// Change the color of the text to "red"
textExample.style.color = "red";

// Change the font size to 2rem
textExample.style.fontSize = "2rem";

//
//

// 2. Create a totally new html element in JavaScript and insert them into a parent

// Without function

const insertElementHere = document.querySelector("#insert-element-here");

const newElement = document.createElement("p");

insertElementHere.appendChild(newElement);

// With function

newElement.innerHTML = "This is a new element!";

function createNewElement() {
  const newElement = document.createElement("p");
  newElement.style.border = "blue 1px solid";
  insertElementHere.appendChild(newElement);
  newElement.innerHTML = "This is a new element!";

  console.log("This is a new element!");
}
