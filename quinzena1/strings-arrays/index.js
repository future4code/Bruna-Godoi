// //----------------------Exercício 1------------------------
// // const nomeUsuario = prompt("Qual seu nome?")
// // const emailUsuario = prompt ("Qual seu e-mail?", nomeUsuario)
// // console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso. Seja Bem vinda(o)", nomeUsuario,"!") 

// //----------------------Exercício 2------------------------
// const listaComida = ["Risoto", "Lasanha", "carbonara", "Piza de peperoni", "Massa Fresca"]
// console.log(listaComida)
// console.log("Essas são minhas 5 comidas preferidas:")
// console.log(listaComida[0])
// console.log(listaComida[1])
// console.log(listaComida[2])
// console.log(listaComida[3])
// console.log(listaComida[4])

// //----------------------Exercício 3------------------------
// const listaDeTarefas = []
// listaDeTarefas[0] = prompt("Digite sua primeira tarefa")
// listaDeTarefas[1] = prompt("Digite sua Segunda tarefa")
// listaDeTarefas[2] = prompt("Digite sua terceira tarefa")
// console.log(listaDeTarefas)

// const atividadeRealizada = prompt("Digite 0, 1 ou 2 correspondente a tarefa realizada:")
// listaDeTarefas.splice(atividadeRealizada, 1)
// console.log(listaDeTarefas)

// ---------------------------Desafios

/*1. Receba uma frase e retorne um array onde cada elemento 
 é uma das palavras da frase, ignorando os espaços*/

// const frase = prompt("Coloque aqui uma frase:")
// console.log([frase.split(" ")])

// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
// faça um programa que acha o índice da palavra Abacaxi e 
// imprime tanto o índice quanto o tamanho do array
// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log(frutas.indexOf("Abacaxi"))
// console.log(frutas.length)