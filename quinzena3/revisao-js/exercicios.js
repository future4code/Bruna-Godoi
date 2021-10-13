// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for (let i = array.length-1; i >=0; i --){
    arrayInvertido.push(array[i])

  }
return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares =[]
  for (let item of array){
    if (item % 2 === 0){
      let elevadoAhDois = item * item 
      numerosPares.push(elevadoAhDois)
    }
  }
return numerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares =[]
  for (let item of array){
    if (item % 2 === 0){
      numerosPares.push(item)
    }
  }
return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
  for (item of array){
    if (item >=maiorNumero){
      maiorNumero = item 
    }
  }
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const tamanhoArray = array.length
  return tamanhoArray
}


// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const respostaNoArray = [
  booleano1 && booleano2 && !booleano4,
  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]
  return respostaNoArray
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
 let numeroPares = []
 for (let i = 0; numeroPares.length < n; i++){
   if (i % 2 === 0){
     numeroPares.push(i)
   }
 }
 return numeroPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  


}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
  let astroDev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor:'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return astroDev
}

// EXERCÍCIO 13
function imprimeChamada() {
  let astroDev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor:'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  const imprimeFrase = `Venha assistir ao filme ${astroDev.nome}, de ${astroDev.ano}, dirigido por ${astroDev.diretor} e estrelado por ${astroDev.atores[0]}, ${astroDev.atores[1]}, ${astroDev.atores[2]}, ${astroDev.atores[3]}.`
  return imprimeFrase
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const triangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: lado1 * lado2
}
return triangulo 
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome= "ANÔNIMO"
  return pessoa
}
// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
 

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
