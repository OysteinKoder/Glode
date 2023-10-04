const emojiList = document.querySelector("#emoji-list");
const emojis = {
  catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
  dogEmojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
};

function renderEmojis() {
  for (i = 0; i < emojis.catEmojis.length; i++) {
    let newLiElement = document.createElement("li");
    newLiElement.innerText = emojis.catEmojis[i];
    newLiElement.addEventListener("click", () => {
      navigator.clipboard.writeText(newLiElement.innerText);
      alert(newLiElement.innerText + " is now on your clipboard ");
      console.log(newLiElement.innerText);
    });
    emojiList.appendChild(newLiElement);
  }
}
