// BORA
console.log(TransformarPalavra("coDIGo"));
function TransformarPalavra(palavra) {
    var maiusculas = /[A-Z]/g;
    var minusculas = /[a-z]/g;
    var contadorMa = palavra.match(maiusculas);
    var contadorMi = palavra.match(minusculas);
    console.log(contadorMa);
    console.log(contadorMi);
    if (contadorMa.length > contadorMi.length) {
        return palavra.toUpperCase();
    }
    else {
        return palavra.toLowerCase();
    }
}
