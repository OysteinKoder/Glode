const boredCard = document.querySelector(".bored_card");

// fetches the data from the url and displays it in the browser
function getActivity() {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    // if there is an error, log it to the console
    .catch((error) => console.log(error));
}

getActivity();
