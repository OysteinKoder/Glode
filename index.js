// Arrays
const myArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(myArray);
console.table(myArray);

// Array Methods

// Objects
const myObject = {
  nameKey: "John",
  surnameKey: "Doe",
  ageKey: 30,
};
console.log(myObject);

// Object Methods

// Loops.

// javascript to manipulate the dom

const insertElementHere = document.querySelector("#insert-element-here");

const newElement = document.createElement("p");

newElement.id = "new-element";

insertElementHere.appendChild(newElement);

newElement.remove();

// With function

newElement.innerHTML = "This is a new element!";

function createNewElement() {
  const newElement = document.createElement("p");
  newElement.style.border = "blue 1px solid";
  insertElementHere.appendChild(newElement);
  newElement.innerHTML = "This is a new element!";

  console.log("This is a new element!");
}
