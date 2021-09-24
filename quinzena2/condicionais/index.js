// exercício 1 

// const qualEhIdade = confirm("Você é maior de idade?")

// if (qualEhIdade === true)  {
    
// console.log( "Você pode Dirigir!")

// }   else{
//     console.log("Você não pode dirigir!")
// }

// // Exercício 2

// const qualOhTurno = prompt("Qual turno você estuda: Digite 'M' para Matutino, 'V' para Vespertino e 'N' para Noturno.")

// if (qualOhTurno.toUpperCase() === 'M' ) {
//     console.log ("Bom Dia!!!!")
// } else if (qualOhTurno.toUpperCase === 'V'){
//     console.log ("Boa Tarde!!!!")

// }else if (qualOhTurno === 'N'){
//     console.log("Boa Noite!!!!")
// }else if (qualOhTurno){
//     console.log("Não entendi, Digite 'M', 'V' ou 'N'")

// }

// switch (qualOhTurno.toUpperCase()){
//     case 'M':
//         console.log ("Bom Dia!!!!")
//         break

//     case 'V':
//         console.log ("Boa Tarde!!!!")
//         break

//     case 'N':
//         console.log ("Boa Noite!!!!")
//         break

//     default:
//         console.log("Não entendi, Digite 'M', 'V' ou 'N'")
//     }

// Exercício 4

// const generoDoFilme = prompt("Qual o gênero do filme que vão assistir?")
// const precoIngresso = prompt("Qual o valor do ingresso?")

// switch (generoDoFilme.toUpperCase(), precoIngresso){
//     case "Fantasia" :
//     case "15", "15,00":
//         console.log("Bom Filme, aproveitem!")
//         break
//     default:
//         console.log("Escolha outro filme :(")
//         break
// }

// Desafios

// const generoDoFilme = confirm("Vocês vão assistir um filme de gênero 'Fantasia'?")
// const precoIngresso = confirm("O valor do ingresso é 15,00?")

// if (generoDoFilme && precoIngresso){
//     const qualLanche = prompt("Qual Lanche vocês vão querer: Pipoca, Chocolate ou Doces")
//     console.log(`Bom Filme!!! Aproveitem a(o) ${qualLanche}`)
// }else{
//     console.log("Escolham outro filme :(")
// }

const nomeCompleto = prompt("Qual seu nome completo?")
const tipoDoJogo = confirm("O seu jogo é Internacional?")
const etapaDojogo = prompt("Qual a etapa do jogo: 'SF'- Semi Finais, 'DT'- Decisão Terceiro lugar, FI - Final")
const categoriaJogo = Number(prompt("Qual a sua categoria de jogo? (1, 2, 3 ou 4)"))
const quantosIngressos = Number(prompt("Qual a quantidade de ingressos?"))
// -----------------SF---DT---FI
const categoria1 = [1320,660,1980]
const categoria2 = [880,440,1320]
const categoria3 = [550,330,1320]
const categoria4 = [220,170,330]



if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'SF' && categoriaJogo === 1){

    const ingressoFinalIn= quantosIngressos * categoria1[0] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 1
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria1[0] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'SF'&& categoriaJogo ===2 ){
    const ingressoFinalIn= quantosIngressos * categoria2[0] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 2
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria2[0] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'SF'&& categoriaJogo ===3 ){
    const ingressoFinalIn= quantosIngressos * categoria3[0] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 3
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria3[0] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'SF' && categoriaJogo ===4 ){
    const ingressoFinalIn= quantosIngressos * categoria4[0] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 4
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria4[0] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}
// -----------------------------DT----------------------------------------------

if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'DT' && categoriaJogo === 1){

    const ingressoFinalIn= quantosIngressos * categoria1[1] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar
    Categoria: 1
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria1[1] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true &&  etapaDojogo.toUpperCase === 'DT'&& categoriaJogo ===2 ){
    const ingressoFinalIn= quantosIngressos * categoria2[1] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar 
    Categoria: 2
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria2[1] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'DT' && categoriaJogo ===3 ){
    const ingressoFinalIn= quantosIngressos * categoria3[1] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar 
    Categoria: 3
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria3[1] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'DT' && categoriaJogo ===4 ){
    const ingressoFinalIn= quantosIngressos * categoria4[1] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar 
    Categoria: 4
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria4[1] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}

// -----------------------------------FI-----------------------------------------

if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'FI' && categoriaJogo === 1){

    const ingressoFinalIn= quantosIngressos * categoria1[2] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final
    Categoria: 1
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria1[2] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true &&  etapaDojogo.toUpperCase === 'FI' && categoriaJogo ===2 ){
    const ingressoFinalIn= quantosIngressos * categoria2[2] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final
    Categoria: 2
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria2[2] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'FI' && categoriaJogo ===3 ){
    const ingressoFinalIn= quantosIngressos * categoria3[2] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final 
    Categoria: 3
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria3[2] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === true && etapaDojogo.toUpperCase === 'FI' && categoriaJogo ===4 ){
    const ingressoFinalIn= quantosIngressos * categoria4[2] *4.1

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final 
    Categoria: 4
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria4[2] * 4.1}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}


// -----------------------------DO----------------------------------------------

if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'SF' && categoriaJogo === 1){

    const ingressoFinal= quantosIngressos * categoria1[0]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 1
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria1[0]}
    Valor Total dos Ingressos: ${ingressoFinalIn}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'SF'&& categoriaJogo ===2 ){
    const ingressoFinal= quantosIngressos * categoria2[0]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 2
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria2[0]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'SF'&& categoriaJogo ===3 ){
    const ingressoFinal= quantosIngressos * categoria3[0]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 3
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria3[0]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'SF' && categoriaJogo ===4 ){
    const ingressoFinal= quantosIngressos * categoria4[0]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Semi Final 
    Categoria: 4
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria4[0]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}
// -----------------------------DT----------------------------------------------

if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'DT' && categoriaJogo === 1){

    const ingressoFinal= quantosIngressos * categoria1[1]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar
    Categoria: 1
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria1[1]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false &&  etapaDojogo.toUpperCase === 'DT'&& categoriaJogo ===2 ){
    const ingressoFinal= quantosIngressos * categoria2[1]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar 
    Categoria: 2
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria2[1]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'DT' && categoriaJogo ===3 ){
    const ingressoFinal= quantosIngressos * categoria3[1]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar 
    Categoria: 3
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria3[1]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'DT' && categoriaJogo ===4 ){
    const ingressoFinal= quantosIngressos * categoria4[1]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Decisão Terceiro Lugar 
    Categoria: 4
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria4[1]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}

// -----------------------------------FI-----------------------------------------

if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'FI' && categoriaJogo === 1){

    const ingressoFinal= quantosIngressos * categoria1[2]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final
    Categoria: 1
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria1[2]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false &&  etapaDojogo.toUpperCase === 'FI' && categoriaJogo ===2 ){
    const ingressoFinal= quantosIngressos * categoria2[2]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final
    Categoria: 2
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria2[2]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'FI' && categoriaJogo ===3 ){
    const ingressoFinal= quantosIngressos * categoria3[2]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final 
    Categoria: 3
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria3[2]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}else if (tipoDoJogo === false && etapaDojogo.toUpperCase === 'FI' && categoriaJogo ===4 ){
    const ingressoFinal= quantosIngressos * categoria4[2]

    console.log(`
    ----------Dados da Compra-------------
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: Internacional
    Etapa do Jogo: Final 
    Categoria: 4
    Quantidade de Ingressos: ${quantosIngressos}
    -----------------Valores--------------
    Valor do Ingresso: ${categoria4[2]}
    Valor Total dos Ingressos: ${ingressoFinal}
    `)
}


