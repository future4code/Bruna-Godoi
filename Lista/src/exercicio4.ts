enum departament {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
};

type people = {
    name: string,
    payment: number,
    departament: departament,
    remote: boolean
};

const peoppleInfo: people[] = [
	{ name: "Marcos", payment: 2500, departament: departament.MARKETING, remote: true },
	{ name: "Maria" ,payment: 1500, departament: departament.VENDAS, remote: false},
	{ name: "Salete" ,payment: 2200, departament: departament.FINANCEIRO, remote: true},
	{ name: "João" ,payment: 2800, departament: departament.MARKETING, remote: false},
	{ name: "Josué" ,payment: 5500, departament: departament.FINANCEIRO, remote: true},
	{ name: "Natalia" ,payment: 4700, departament: departament.VENDAS, remote: true},
	{ name: "Paola" ,payment: 3500, departament: departament.MARKETING, remote: true }
];

const returnMark = (employees: people[]) : people[] =>{
    const info : people[] = employees.filter(employee =>{
        return employee.departament === "marketing" && employee.remote;
    });

    return info;    
};

console.log(returnMark(peoppleInfo));