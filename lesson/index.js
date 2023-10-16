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
// Here we are pushing an html paragraph with javascript into the index.html document.

const insertElementHere = document.querySelector("#insert-element-here");

function createNewElement() {
  const newElement = document.createElement("p");

  newElement.innerText = "det er lov å gjøre feil";

  insertElementHere.appendChild(newElement);
}

// Here we are doing the same thing, but we are doing it for every index of an array.
const list = document.querySelector("#list");
const tingJegLiker = ["båt", "bil", "valper", "hubbabubba"];

function renderList() {
  for (i = 0; i < tingJegLiker.length; i++) {
    const newListElement = document.createElement("li");
    newListElement.innerText = tingJegLiker[i];
    list.appendChild(newListElement);
  }
}

// Here we are console logging how much time a function takes.
function longLoop() {
  for (i = 0; i < 10000; i++) {
    console.log("hello");
  }
}

console.time("longLoop");
longLoop();
console.timeEnd("longLoop");
