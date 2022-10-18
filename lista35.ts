// BORA

// EXERCICIO 1

// console.log(QuebrarBarra(5, 3))

// function QuebrarBarra(x: number, y: number): number{
//     if(x == 0 || y == 0){
//         return -1
//     }

//     let resultado: number = (x * y) - 1
//     return resultado

// }

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
let segundoLutador: Lutador = new Lutador("Joao", 500, 80)

NomeDoVencedor(primeiroLutador, segundoLutador, "Joao")

function NomeDoVencedor(primeiroLutador:Lutador, segundoLutador:Lutador, primeiroAtacar: string): string | undefined{
    let continuar : boolean = true
    let lutadores: Lutador[] = []

    if(primeiroLutador.Nome == primeiroAtacar){
        lutadores.push(primeiroLutador, segundoLutador)
    }
    else{
        lutadores.push(segundoLutador, primeiroLutador)
    }      

    do{    
        lutadores[1].Vida = lutadores[1].Vida - lutadores[0].Ataque
        if(lutadores[1].Vida <= 0){
            continuar = false
            console.log(`O lutador ${lutadores[1].Nome} ficou com ${lutadores[1].Vida} de vida`)
            console.log("O vencedor da luta e: ", lutadores[0].Nome)
        }
        else{
            lutadores.reverse()
        }

    }while(continuar)
}
