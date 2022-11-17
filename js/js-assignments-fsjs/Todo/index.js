const btn = document.querySelector(".addButton");
let input = document.querySelector(".input").value;
let list = document.querySelector(".list");
let error = document.querySelector(".error");

btn.addEventListener("click", save);

function save() {
  let input = document.querySelector(".input").value;

  error.innerHTML = "";
  if (input == "") {
    error.innerHTML = "Please enter something.";
  } else {
    let li = document.createElement("li");
    li.textContent = input;

    let pos = list.firstElementChild;

    if (pos === null) {
      list.appendChild(li);
    } else {
      list.insertBefore(li, pos);
    }

    console.log(li);
  }

  input.value = "";
}
