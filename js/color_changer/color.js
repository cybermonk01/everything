const btn = document.getElementById("button");

const randomColor = () => {
  let cons = "#";
  let hex = "01234546789ABCDE";

  for (let i = 0; i < 6; i++) {
    cons = cons + hex[Math.floor(Math.random() * 16)];
  }
  return cons;
};

function changeColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeColor);
