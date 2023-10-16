// Vi henter et HTML element vi ønsker å modifisere
const container = document.querySelector("#containerID");
console.log(container);

// Vi modifiserer elementet med å legge til styling
container.style.height = "100px";
container.style.border = "2px solid black";

// Vi gir elementet vi hentet innhold
container.textContent = "Hei!";

// En linje med kommentar

/*
Mange
Linjer
Med
Kommentarer
*/
