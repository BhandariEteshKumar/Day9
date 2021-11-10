var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let res = JSON.parse(this.response);
    let totalPopulation = res.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.population;
    }, 0);
    console.log(totalPopulation);
  }
};

// Output:
// 7349137231
