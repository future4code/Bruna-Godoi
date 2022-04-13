type userData = {
    user: string,
    currentBalance: number,
    debts: number[]
};

const listOfUsers: userData[] = [
	{ user: "João", currentBalance: 1000, debts: [100, 200, 300] },
	{ user: "Paula", currentBalance: 7500, debts: [200, 1040] },
	{ user: "Pedro", currentBalance: 10000, debts: [5140, 6100, 100, 2000] },
	{ user: "Luciano", currentBalance: 100, debts: [100, 200, 1700] },
	{ user: "Artur", currentBalance: 1800, debts: [200, 300] },
	{ user: "Soter", currentBalance: 1200, debts: [] }
];

const filterTarget = (users: userData[]): userData[] =>{
    const target: userData[] = users
    .map(user =>{
            const debts: number = user.debts.reduce((acc, item) => acc + item, 0);
            const newList: userData = {
                ...user, currentBalance: user.currentBalance - debts, debts: []
            };
            return newList;
        }
    )
    .filter(user => user.currentBalance < 0);
    return target;
};

console.log(filterTarget(listOfUsers)); 