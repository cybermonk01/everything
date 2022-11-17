let quote = document.querySelector("h2");
let author = document.querySelector("span");

let btn = document.querySelector("button");

const url = "https://api.quotable.io/random";

function getQuote() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerHTML = item.content;
      author.innerText = item.author;

      console.log(item);
    });
}

btn.addEventListener("click", getQuote);
