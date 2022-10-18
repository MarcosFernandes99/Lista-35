// BORA

// EXERCICIO 1

console.log(QuebrarBarra(5, 3))

function QuebrarBarra(x: number, y: number): number{
    if(x == 0 || y == 0){
        return -1
    }

    let resultado: number = (x * y) - 1
    return resultado

}

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

class Lutador{
    Nome: string
    Vida: number
    Ataque: number

    constructor(nome: string, vida: number, ataque: number){
        this.Nome = nome
        this.Vida = vida
        this.Ataque = ataque
    }
}

let primeiroLutador: Lutador = new Lutador("Marcos", 500, 100)
let segundoLutador: Lutador = new Lutador("João", 500, 80)

console.log(NomeDoVencedor(primeiroLutador, segundoLutador, segundoLutador))

function NomeDoVencedor(primeiroLutador:Lutador, segundoLutador:Lutador, primeiroAtaque:Lutador): string | undefined{
    let continuar : boolean = true 

    do{    
    primeiroLutador.Vida = primeiroLutador.Vida - primeiroAtaque.Ataque
    console.log(primeiroLutador.Vida)
    if(primeiroLutador.Vida <= 0){       
        return segundoLutador.Nome
    }

    segundoLutador.Vida = segundoLutador.Vida - primeiroLutador.Ataque
    console.log(segundoLutador.Vida)
    if(segundoLutador.Vida <= 0){       
        return primeiroLutador.Nome
    }

    }while(continuar)
}
