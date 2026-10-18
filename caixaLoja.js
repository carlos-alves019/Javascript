const readline = require("readline-sync")
const nome = readline.question("Qual seu Nome?: ")
const nomeProduto = readline.question("Qual o nome do Produto? ")
const precoUnitario = readline.questionFloat("Preco do Produto: ")
const qtdUnidades = readline.questionInt("Quantidade de Unidades compradas: ")

const subtotal = precoUnitario * qtdUnidades
let desconto = 0

if(subtotal <= 50){
    console.log(`Desconto: ${desconto = 0}`)
} else if (subtotal >=50 && subtotal <100){
     console.log(`Desconto: ${desconto = subtotal * 0.05}`)
} else {
     console.log(`${nome}, O seu Desconto é de : ${desconto = subtotal.toFixed(2) * 0.10} €`)
}
const total = subtotal - desconto;
console.log(`Total a pagar: ${total.toFixed(2)}`)