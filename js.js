


function realizarDivision() {
    var dividendo = document.getElementById("dividendo").value;
    var divisor = document.getElementById("divisor").value;
  
    if (divisor === '0') {
      document.getElementById("resultado").innerHTML = "El divisor no puede ser cero";
    } else {
      var resultado = dividendo / divisor;
      document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
    }
  }
  function realizarResta() {
    var minuendo = document.getElementById("minuendo").value;
    var sustraendo = document.getElementById("sustraendo").value;
  
      var resultado = minuendo - sustraendo;
      document.getElementById("resultado2").innerHTML = "El resultado de la resata es: " + resultado;
    }

    function realizarSuma() {
      var sumandoa = document.getElementById("sumandoa").value;
      var sumandob = document.getElementById("sumandob").value;
    
        var resultado = sumandoa + sumandob;
        document.getElementById("resultado3").innerHTML = "El resultado de la suma es: " + resultado;
      }