let string = "";

let btns = document.querySelectorAll(".btn");

Array.from(btns).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".input").value = string;
    } else {
      string += e.target.innerHTML;

      document.querySelector(".input").value = string;
    }
  });
});
