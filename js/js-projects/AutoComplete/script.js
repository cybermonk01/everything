let input = document.querySelector(".input");

let countries = [];
let lists = document.querySelector(".autocomplete-list");

function fetchData() {
  fetch("https://restcountries.com/v3.1/all ")
    .then((response) => response.json())
    .then((data) => {
      countries = data.map((x) => x.name.common);
      countries.sort();
      loadData(countries, lists);
      console.log(countries);
    });
}

function loadData(data, element) {
  if (data) {
    element.innerHTML = "";

    let innerElement = "";
    data.forEach((item) => {
      innerElement += ` <li>${item}</li>`;
    });

    element.innerHTML = innerElement;
  }
}

function filterData(data, searchText) {
  return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}

input.addEventListener("input", function () {
  const filteredData = filterData(countries, input.value);
  loadData(filteredData, lists);
});
