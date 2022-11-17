const Search = () => {
  console.log("clicked");
  let input = document.querySelector("#input").value.toLowerCase();
  let table = document.querySelector("table");

  let tr = document.getElementsByTagName("tr");
  console.log(tr);

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      let textValue = td.innerContent || td.innerHTML;
      if (textValue.toLowerCase().indexOf(input) > -1) {
        console.log(textValue.toLowerCase().indexOf(input));
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
