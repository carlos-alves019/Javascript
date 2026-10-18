const readline = require("readline-sync")
const nome = readline.question("Qual seu Nome?: ")
const nota1 = readline.questionFloat("Primeira Nota: ")
const nota2 = readline.questionFloat("Segunda Nota: ")

const media = (nota1 + nota2)/2
console.log(`Média: ${media}`)
    if(media >=10){
        console.log(`${nome}, voce foi Aprovado!`)
    } else {
        console.log(`${nome} voce foi Reprovado!`)
    }