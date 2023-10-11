// Arrays (index, vi finner dataen med tall)

// Array Methods basic

// Objects (vi finner dataen med navn)

const exampleObject = {
  name: "Øystein",
  surname: "Ellingsen",
  age: 31,
};

// Array/Object

const arrayObjectMix = [
  { name: "per", surname: "askeladden", age: 13 },
  { name: "espen", surname: "askeladden", age: 9 },
  { name: "pål", surname: "askeladden", age: 14 },
];

console.log(arrayObjectMix[2].name);

// Loops.

const insertElementHere = document.querySelector("#insert-element-here");

function createNewElement() {
  const newElement = document.createElement("p");

  newElement.innerText = "det er lov å gjøre feil";

  insertElementHere.appendChild(newElement);
}

const list = document.querySelector("#list");
const tingJegLiker = ["båt", "bil", "valper", "hubbabubba"];

function renderList() {
  for (i = 0; i < tingJegLiker.length; i++) {
    const newListElement = document.createElement("li");
    newListElement.innerText = tingJegLiker[i];
    list.appendChild(newListElement);
  }
}

// With function

// newElement.innerHTML = "This is a new element!";

// function createNewElement() {
//   const newElement = document.createElement("p");
//   newElement.style.border = "blue 1px solid";
//   insertElementHere.appendChild(newElement);
//   newElement.innerHTML = "This is a new element!";

//   console.log("This is a new element!");
// }
