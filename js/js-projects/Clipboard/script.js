let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let input = document.querySelector(".input");
  input.select();
  document.execCommand("copy");

  let element = document.querySelector("#copyValue");
  element.innerHTML = "The copied value is " + input.value;
});
