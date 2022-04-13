enum GENERO {
ACAO="ação",
DRAMA="drama",
COMEDIA="comédia",
ROMANCE="romance",
TERROR="terror"
};

type infoMovie = {
name : string,
year: number,
gender: GENERO,
score? : number 
};

const returnInfo = (
name: string, 
year: number, 
gender: GENERO, 
score?: number
) : infoMovie =>{
const info : infoMovie = {
    name,
    year,
    gender,
    score
};
return info;
};

console.log(returnInfo("Homem-Aranha: Sem Volta para Casa", 2021, GENERO.ACAO, 8.6));