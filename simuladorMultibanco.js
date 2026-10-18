const readline = require("readline-sync")
const nome = readline.question("Informe seu Nome: ")
const opcoes = readline.questionInt("Escolha uma operacao:\n 1- Consultar Saldo\n 2- Depositar Dinheiro\n 3- Levantar Dinheiro\n 4-Sair\n")
let saldoAtual = 500.00
console.log("===== MULTIBANCO ====")
console.log(`Bem-Vindo, ${nome}!`)
console.log(`Saldo Disponível : ${saldoAtual}`)
switch (opcoes) {
    case 1:
        console.log(`Saldo Atual : ${saldoAtual}`)
    break

    case 2: 
        const deposito = readline.questionFloat("Quanto deseja depositar? ");
    if(deposito > 0){
        saldoAtual = saldoAtual + deposito;
        console.log(`${nome}, seu saldo atual é: ${saldoAtual}€`)
    break
    } else {
        console.log("Valor Inválido!")
    break
    }
    case 3:
        let levantar = readline.questionFloat("Quanto deseja levantar? ")
    if(levantar > 0 && levantar <= saldoAtual){
        saldoAtual = saldoAtual - levantar;
        console.log(`Valor levantado ${nome}, Saldo Atual: ${saldoAtual}` )
    break
    } else {
        console.log("Erro!!, Você nao possui saldo suficiente!")
    break
    }
    case 4:
        const resposta = readline.question("Deseja realmente sair? (S/N): ").toUpperCase();
        const respostaMaiuscula = resposta.toUpperCase()
    if (respostaMaiuscula === "S") {
        console.log(`Ok, até a próxima ${nome}!`)

    } else {
        console.log("Operação cancelada")
    }
    break
    default:
        console.log("Inválido!")



    
}



