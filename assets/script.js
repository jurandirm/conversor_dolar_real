/* let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () =>{
    console.log("apertou no campo USD")
    console.log(usdInput.value)
})

brlInput.addEventListener("keyup", () =>{
    console.log("apertou no campo BRL")
})*/

let dolar = 6.11

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () =>{
    //usdInput.value = formatCurrency(usdInput.value)
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () =>{
    //brlInput.value = formatCurrency(brlInput.value)
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1,00"
convert("usd-to-brl")

// Funções

function formatCurrency(value){
    // ajustar o valor
    let fixedValue = fixValue(value)
    // utilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    // retornar o valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value){
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}

function convert(type){
    if(type == "usd-to-brl"){
        let fixedValue = fixValue(usdInput.value)
        let result = fixedValue * dolar
        result = result.toFixed(2)
        brlInput.value = formatCurrency(result)

    }
    if(type == "brl-to-usd"){
        let fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)
        usdInput.value = formatCurrency(result)

    }

}