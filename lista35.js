// BORA
// EXERCICIO 2
// console.log(TransformarPalavra("coDIGo"))
// function TransformarPalavra(palavra: string):string {
//     let maiusculas : RegExp = /[A-Z]/g
//     let minusculas : RegExp = /[a-z]/g
//     let contadorMa: string[] | null = palavra.match(maiusculas)
//     let contadorMi: string[] | null = palavra.match(minusculas)
//     console.log(contadorMa)
//     console.log(contadorMi)
//     if(contadorMa.length > contadorMi.length){
//         return palavra.toUpperCase()
//     }
//     else{
//         return palavra.toLowerCase()
//     }
// }
//EXERCICIO 3
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        this.Nome = nome;
        this.Vida = vida;
        this.Ataque = ataque;
    }
    return Lutador;
}());
var primeiroLutador = new Lutador("Marcos", 500, 100);
var segundoLutador = new Lutador("João", 500, 80);
console.log(NomeDoVencedor(primeiroLutador, segundoLutador, segundoLutador));
function NomeDoVencedor(primeiroLutador, segundoLutador, primeiroAtaque) {
    var continuar = true;
    // let vidaPrimeiroJogador:number = primeiroLutador.Vida
    // let vidaSegundoJogador:number = segundoLutador.Vida
    do {
        primeiroLutador.Vida = primeiroLutador.Vida - primeiroAtaque.Ataque;
        console.log(primeiroLutador.Vida);
        if (primeiroLutador.Vida <= 0) {
            return segundoLutador.Nome;
        }
        segundoLutador.Vida = segundoLutador.Vida - primeiroLutador.Ataque;
        console.log(segundoLutador.Vida);
        if (segundoLutador.Vida <= 0) {
            return primeiroLutador.Nome;
        }
    } while (continuar);
}
