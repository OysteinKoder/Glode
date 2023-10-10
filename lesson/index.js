// Arrays
const exampleArray = ["bil", "hund", "katt", "hest"];

// Array Methods basic
exampleArray.unshift("klovn");

exampleArray.shift();

exampleArray.push("raggesokker");

exampleArray.pop();

console.log(exampleArray);

// Objects

const exampleObject = {
  name: "john",
  surname: "doug",
  occupation: "baker",
  age: 59,
};

console.log(exampleObject.surname);

// Array/Object

const arrayObjectMix = [
  {
    dogRace: "korgi",
    dogAge: 7,
    furColor: "red",
  },
  {
    catRace: "Blue Russian",
    catLives: 8,
    furColor: "Kinda blue",
    catsMyAuntOwns: ["Luna", "Muffin", "Shadow", "Ginger", "Midnight", "Cleo"],
  },
];

console.log(arrayObjectMix[0].dogAge);

// Loops.

const arrayLoop = [
  "hey world",
  "hey world",
  "hey world",
  "hey world",
  "hey world",
  "hey world",
  "hey world",
  "hey world",
];

// ok. Så når vi vil loope igjennom et helt array,
// så kan vi bruke array.length

for (i = 0; i < arrayLoop.length; i++) {
  console.log(arrayLoop[i]);
}

// alle gå inn og stem på poll

// javascript to manipulate the dom

// const insertElementHere = document.querySelector("#insert-element-here");

// const newElement = document.createElement("p");

// newElement.id = "new-element";

// insertElementHere.appendChild(newElement);

// newElement.remove();

// With function

// newElement.innerHTML = "This is a new element!";

// function createNewElement() {
//   const newElement = document.createElement("p");
//   newElement.style.border = "blue 1px solid";
//   insertElementHere.appendChild(newElement);
//   newElement.innerHTML = "This is a new element!";

//   console.log("This is a new element!");
// }
