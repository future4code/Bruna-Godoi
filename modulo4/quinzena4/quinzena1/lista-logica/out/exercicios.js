// Exemplos

// // Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// // Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// // ---------------------------------------------------
// // Exercícios

// // Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number( prompt("Digite a altura de um retângulo:"))
  const largura = Number( prompt("Digite a Largura de um retângulo:"))

  console.log(altura * largura)
  
}

// // Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number( prompt("em que ano você nasceu?"))
  console.log(anoAtual-anoNascimento)
}

// // Exercício 3
function calculaIMC() {
  const pesoUsuario = Number(prompt("Qual seu peso?"))
  const alturaUsuario = Number( prompt("Qual sua altura?"))
  console.log(pesoUsuario / (alturaUsuario * alturaUsuario))

}

// Exercício 4
function imprimeInformacoesUsuario(dadosUsuario) {
  const nome = prompt("Qual seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

  
// Exercício 5
function imprimeTresCoresFavoritas() {
  const cores = []
  const cor1 = prompt("Qual sua cor preferida?")
  const cor2 = prompt("Qual sua segunda cor preferida?")
  const cor3 = prompt("Qual sua terceira cor preferida?")
  cores.push(cor1)
  cores.push(cor2)
  cores.push(cor3)
  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
 const upperCase = prompt("Escreva aqui uma frase?")
 console.log(upperCase.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
const valorCusto = prompt("Qual o valor de custo de um espetáculo de teatro?")
const valorIngresso = prompt("Qual o valor do ingresso?")
const contaPrejuizo = valorCusto / valorIngresso
console.log(contaPrejuizo)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const frase1 = prompt("Digite uma frase:")
  const frase2 = prompt("Digite outra frase:")
  const tamanhoFrases = frase1.length === frase2.length
  console.log(tamanhoFrases)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite uma frase:")
  const string2 = prompt("Digite outra frase:")
  const stringIguais = string1.toLowerCase() === string2.toLowerCase()
  console.log(stringIguais)
}

// Exercício 10
function checaRenovacaoRG() {
    const anoAtual = Number(prompt("Em qual ano estamos?"))
    const anoNascimento = Number(prompt("Em qual ano você nasceu?"))
    const emissaoRg = Number(prompt("Em qual ano você emitiu seu RG?"))
    const idade = anoAtual - anoNascimento
    const duracaoUltimoRg = anoAtual-emissaoRg
    
    const precisaRenovaCarteiraA = idade <= 20 && duracaoUltimoRg >= 5
    
    const precisaRenovaCarteiraB = idade > 20 && idade <= 50 && duracaoUltimoRg >= 10
    
    const precisaRenovaCarteiraC = idade > 50 && duracaoUltimoRg >= 15
    
    const renvocaoCarteiraIdentidade = precisaRenovaCarteiraA || precisaRenovaCarteiraB || precisaRenovaCarteiraC
    
    console.log(renvocaoCarteiraIdentidade)
    
    }



// Exercício 11
function checaAnoBissexto() {
    const anoEscolhido = Number(prompt("Digite um ano:"))
    const eBissexto1 = anoEscolhido % 400 === 0
    const eBissexto2 = anoEscolhido % 4 === 0 && anoEscolhido % 100 !== 0
    
    const eBissexto = eBissexto1 || eBissexto2
    
    console.log(eBissexto)
    
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
    const idade = prompt("Qual sua idade?")
    const escolaridade = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Vocoê possui disponibilidade exclusiva durantes os horários do curso?")
    
    const maiorDeIdade = idade === "sim"
    const temEnsinoMedio = escolaridade === "sim"
    const temDisponibilidade = disponibilidade === "sim"
    
    const inscricaoValida = maiorDeIdade && temEnsinoMedio && temDisponibilidade
    
    console.log(inscricaoValida)
}