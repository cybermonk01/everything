const joke = document.getElementById("joke");

const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((data) => data.json())
    .then((item) => {
      joke.innerHTML = item.joke;
      console.log(item);
    });
});
