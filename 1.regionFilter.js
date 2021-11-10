var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let res = JSON.parse(this.response);
    let ans = res.filter((re) => {
      if (re.region === "Asia") return re;
    });
    console.log(ans);
  }
};

// Ouput:
// Afghanistan
// Armenia
// Azerbaijan
// Bahrain
// Bangladesh
// Bhutan
// Brunei Darussalam
// Cambodia
// China
// Georgia
// Hong Kong
// India
// Indonesia
// Iran (Islamic Republic of)
// Iraq
// Israel
// Japan
// Jordan
// Kazakhstan
// Kuwait
// Kyrgyzstan
// Lao People's Democratic Republic
// Lebanon
// Macao
// Malaysia
// Maldives
// Mongolia
// Myanmar
// Nepal
// Korea (Democratic People's Republic of)
// Oman
// Pakistan
// Palestine, State of
// Philippines
// Qatar
// Saudi Arabia
// Singapore
// Korea (Republic of)
// Sri Lanka
// Syrian Arab Republic
// Taiwan
// Tajikistan
// Thailand
// Timor-Leste
// Turkey
// Turkmenistan
// United Arab Emirates
// Uzbekistan
// Viet Nam
// Yemen
