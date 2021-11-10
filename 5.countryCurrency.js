var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let res = JSON.parse(this.response);
    let countries = res.filter((re) => re.currencies[0].code === "USD");
    for (let i = 0; i < countries.length; i++) console.log(countries[i].name);
  }
};

// Output:
// American Samoa
// Bonaire, Sint Eustatius and Saba
// British Indian Ocean Territory
// United States Minor Outlying Islands
// Virgin Islands (U.S.)
// Ecuador
// El Salvador
// Guam
// Marshall Islands
// Northern Mariana Islands
// Puerto Rico
// Timor-Leste
// Turks and Caicos Islands
// United States of America
