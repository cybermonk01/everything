const btn = document.getElementById("button");

const randomColor = () => {
  let hex = "#";
  let code = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    hex = hex + code[Math.floor(Math.random() * 16)];
  }
  console.log(hex);
  return hex;
};

const changeColor = () => {
  const canvas = document.getElementById("canvas");
  canvas.style.backgroundColor = randomColor();
  console.log("clicked");
};

btn.addEventListener("click", changeColor);
