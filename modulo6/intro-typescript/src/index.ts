// "terminal.integrated.defaultProfile.windows": "Git Bash",
// npm i colors
// ------------------------------Exercicio1

const checaTriangulo:  (a: string, b:string, c:string) => string = (a,b,c)=>{
    if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
}
// ------------------------------Exercicio
function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }
// ------------------------------Exercicio
const comparaDoisNumeros : (num1: number, num2:number)=> number = (num1, num2) =>{
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca;
}
