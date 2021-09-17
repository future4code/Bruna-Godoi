// -------------------------------Exercício 1-A
// function imprimeMensagem(){
//     console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
// }
// imprimeMensagem()
// ----------------------------------------1-B

// function novaMensagem(nome,idade,cidade,profissao){
//     console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// novaMensagem('bruna', 25,"São José dos Campos","Estudante")

// -------------------------------------Exercícios 2

// function calculaSoma(num1, num2){
//     const soma = num1 + num2
//     return soma

// }
// const resultadoSoma = calculaSoma(5,20)
// console.log(resultadoSoma)

// --------------------------------2-B

// function retornaBoleano(Num1,Num2){
//     const verificaBoleano = Num1 >= Num2
//     return verificaBoleano
// }

// const digiteNumero1 = Number(prompt("Digite um numero:"))
// const digiteNumero2 = Number(prompt("Digite mais um numero:"))
// console.log(retornaBoleano(digiteNumero1,digiteNumero2))

// -------------------------------------2-C
// const digiteNumero = Number(prompt("Digite qualquer número:"))

// function numeroPar (){
//     const consultaPar = digiteNumero %2 ===0
//     console.log(`É um número par? ${consultaPar}`)
// }
// numeroPar(digiteNumero)
// -----------------------------------2-d

// function imprimeMensagem2 (){
//     const mensagem = prompt("Digite uma frase:")
//     console.log(`A mensagem "${mensagem.toLowerCase()}", possui ${mensagem.length} caracteres.`)

// }
// imprimeMensagem2()
// ----------------------------------3

// const NumeroUsuario1 = Number(prompt("Digite um número:"))
// const NumeroUsuario2 = Number(prompt("Digite outro número:"))

// function operacoes(){
//     console.log(`Os números são: ${NumeroUsuario1} e ${NumeroUsuario2}`)
//     const soma = NumeroUsuario1 + NumeroUsuario2
//     const diferenca = NumeroUsuario1 - NumeroUsuario2
//     const multiplicaco = NumeroUsuario1 * NumeroUsuario2
//     const divisao = NumeroUsuario1 / NumeroUsuario2
//     console.log (
//         `A soma é ${soma}
//         A diferença é ${diferenca}
//         A multiplicação é ${multiplicaco}
//         A divisão é ${divisao}`
//     )


// }
// operacoes()

let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)