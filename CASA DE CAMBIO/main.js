
function convertir () {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 146.54;
    var Euro = 140.57;
    var libra = 157.35;
    if (document.getElementById("uno").checked){
    resultado = valore/dolar;
    alert("El cambio de Pesos a Dolares es:$"+resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
    resultado = valore/Euro;
    alert ("El cambio de pesos a Euros es:€"+resultado.toFixed(2))
    }
    else if (document.getElementById("tres").checked){
        resultado = valore/libra;
        alert ("El cambio de pesos a Libras esterlinas es:£"+resultado.toFixed(2))
    }
    else {
        alert("Tienes que completar todos los requerimientos")
    }
}