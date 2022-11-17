const qr = document.querySelector("#img");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

submit.addEventListener("click", generate);

function generate() {
  var data = input.value;
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${data}`;

  qr.src = url;
  console.log(data);
  console.log("clicked");
}
