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
console.log('Olá, Bem-vindo(a) ao jogo BlackJack!');

let jogo = confirm('Quer iniciar um novo jogo?');

if (jogo === true) {
  let cartaUsuario1 = comprarCarta();
  let cartaUsuario2 = comprarCarta();
  let cartaPc1 = comprarCarta();
  let cartaPc2 = comprarCarta();

  let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
  let pontuacaoPc = cartaPc1.valor + cartaPc2.valor;

  console.log(
    `Cartas do Usuario ${cartaUsuario1.texto} - ${cartaUsuario2.texto} - ${pontuacaoUsuario}`
  );
  console.log(
    `Cartas do PC ${cartaPc1.texto} - ${cartaPc2.texto} - ${pontuacaoPc}`
  );

  if (pontuacaoUsuario > pontuacaoPc) {
    console.log('Usuário GANHOU');
  } else if (pontuacaoPc > pontuacaoUsuario) {
    console.log('PC GANHOU');
  } else if (pontuacaoUsuario === pontuacaoPc) {
    console.log('EMPATE');
  }
} else {
  console.log('Até a próxima');
}
