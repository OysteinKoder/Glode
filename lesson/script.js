// arrow functions

function consoleLog() {
  console.log("two seconds have passed");
}

// const arrowFunction = () => {};
// arrowFunction()

// // setTimeout() lets you fire the code inside its body at a delayed time.

// function setTimeoutExample() {
//   setTimeout(() => {}, 2000);
// }

// setTimeoutExample();

// // Promises
// let promise = new Promise((resolve, reject) => {
//   let blue = false;
//   if (blue == true) {
//     resolve("blue ");
//   } else {
//     reject("happy ");
//   }
// });

// promise
//   .then((message) => {
//     console.log("im " + message + "dabidi dabi da oh dabi di.");
//   })
//   .catch((message) => {
//     console.log("im " + message + "dabidi dabi da oh dabi di.");
//   });

// async await
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

// startet api kall

// bruker api kall data
