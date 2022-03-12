/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    let cartasUser=[];
    let cartasPC=[];
    
    let iniciar = confirm("Bem-vindo ao jogo Blackjack! \n Deseja iniciar uma nova rodada?")
    if(iniciar){
       let cartasIniciais=false;
       while(!cartasIniciais){
        cartasUser.push(comprarCarta())
        cartasUser.push(comprarCarta())
        cartasPC.push(comprarCarta())
        cartasPC.push(comprarCarta())
       }
      }
      // Não to conseguindo realizar esse projeto, desculpem. :(