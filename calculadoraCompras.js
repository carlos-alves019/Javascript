const readline = require("readline-sync")
const nome = readline.question("Seu Nome?: ")
const nomeProduto = readline.question("Qual o Nome do Produto?: ")
const PrecoUnitario = readline.questionFloat("Preco do produto?: ")
const Quantidade = readline.questionFloat("Quantos deseja?: ")
const subtotal = PrecoUnitario * Quantidade;
const iva = subtotal * 0.23
const total = subtotal + iva

console.log(`Seu nome é : ${nome}`)
console.log(`Nome do Produto : ${nomeProduto}`)
console.log(`Quantidade : ${Quantidade}`)
console.log(`Subtotal: ${subtotal}`)
console.log(`IVA : ${iva}`)
console.log(`Total : ${total}`)