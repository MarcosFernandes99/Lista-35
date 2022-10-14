// BORA

console.log(TransformarPalavra("coDIGo"))


function TransformarPalavra(palavra: string):string {
    let maiusculas : RegExp = /[A-Z]/g
    let minusculas : RegExp = /[a-z]/g

    let contadorMa: string[] | null = palavra.match(maiusculas)
    let contadorMi: string[] | null = palavra.match(minusculas)

    console.log(contadorMa)
    console.log(contadorMi)

    if(contadorMa.length > contadorMi.length){
        return palavra.toUpperCase()
    }
    else{
        return palavra.toLowerCase()
    }

}