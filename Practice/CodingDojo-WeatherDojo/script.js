function cAlert(){
    alert(`Loading weather report...`)
}

function cAccept(){
    $(".cookie-banner").css("display","none");
}

function cToF(celsius) {
    var fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  }
  
  function fToC(fahrenheit) {
    var celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
  }

  $("#temp").change(function () {
    if (this.value === "celsius") {
        console.log($(".min").text());
    }
    else if (this.value === "fahrenheit") {
        console.log(min.innerHTML);
    }
  })