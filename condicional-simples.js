const readline = require("readline-sync")
const numero = readline.questionInt("Escreva um Numero: ")

if(numero % 2 == 0){
    console.log("O numero é par!")
}else{
        console.log("O numero é Impar!")
    }