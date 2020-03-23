const divOut = document.querySelector("#divOut");
const input = document.querySelector("input");
let URL = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/";
function getData(urlAdd) {
  fetch(URL + urlAdd)
    .then(response => response.json())
    .then(
      result =>
        (divOut.innerHTML = `
          <li>${result.location.latest.confirmed} Подтвержденных случаев </li>
          <li>${result.location.latest.deaths} Смертей </li>
          <li>${result.location.latest.recovered} Выздоровевших </li>
          `)
    )
    .then(console.log((input.value = null)));
}
window.addEventListener("input", function() {
  if (input.value === "Russia") {
    return getData(192);
  } else if (input.value === "Italy") {
    return getData(16);
  } else if (input.value === "Iran") {
    return getData(155);
  }
});
