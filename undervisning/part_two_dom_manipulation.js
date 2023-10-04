// 1. Simple example of how to use JavaScript to manipulate the DOM

const textExample = document.querySelector("#text-example");

textExample.innerHTML = "Hello World!";

textExample.style.color = "red";

textExample.style.fontSize = "2rem";

//
//

// 2. Create a totally new html element in JavaScript and insert them into a parent

const insertElementHere = document.querySelector("#insert-element-here");

const newElement = document.createElement("p");

insertElementHere.appendChild(newElement);

//
//

// With function

newElement.innerHTML = "This is a new element!";

function createNewElement() {
  const newElement = document.createElement("p");

  newElement.style.border = "blue 1px solid";
  insertElementHere.appendChild(newElement);
  newElement.innerHTML = "This is a new element!";
  console.log("This is a new element!");
}
