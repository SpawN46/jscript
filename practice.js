'use strict'

let money = prompt('What is your salary?', '');
let time = prompt('What is it time?', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let a1 = prompt('Ganeral?', ''),
	a2 = prompt('How much do you need money>?', ''),
	a3 = prompt('Ganeral?', ''),
	a4 = prompt('How much do you need money>?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(appData.expenses.a1);
console.log(appData.expenses.a3);

alert(appData.budget / 30);








	
	






















































































































































































































