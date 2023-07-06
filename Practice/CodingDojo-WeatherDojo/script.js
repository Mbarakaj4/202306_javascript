function cAlert() {
  alert(`Loading weather report...`)
}

function cAccept() {
  $(".cookie-banner").css("display", "none");
}

function fahrenheitDraw(c, i) {
  var f = parseInt((c * 9) / 5 + 32);
  $(".card-temp")[i].innerText = f;
  $(".card-symbol")[i].innerText = "ºF";
}

function celsiusDraw(f, i) {
  var c = Math.round(parseInt(((f - 32) * 5) / 9) + 1);
  $(".card-temp")[i].innerText = c;
  $(".card-symbol")[i].innerText = "ºC";
}

function extractValuesF (v, i) {
  fahrenheitDraw(v.innerText, i);
}

function extractValuesC (v, i) {
  celsiusDraw(v.innerText, i);
}

$("#temp").change(function () {
  var tempArr = document.querySelectorAll(".card-temp");
  if (this.value === "fahrenheit") {
    tempArr.forEach(extractValuesF);
  }
  else if (this.value === "celsius") {
    tempArr.forEach(extractValuesC);
  }
})