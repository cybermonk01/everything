const toggle = document.querySelector("i");
const body = document.querySelector("body");
toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  console.log(this.classList);

  if (this.classList.value === "fa-solid fa-sun") {
    body.style.color = "#000";
    body.style.background = "#fff";
    body.style.transition = "2s";
  } else {
    body.style.background = "#000";
    body.style.color = "#fff";
    body.style.transition = "2s";
  }
});
