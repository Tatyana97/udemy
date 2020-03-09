let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
    budget: money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


let ask_1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
ask_2 = prompt("Во сколько обойдется?", ''),
ask_3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
ask_4 = prompt("Во сколько обойдется?", '');

expenses.ask_1 = ask_2;
expenses.ask_3 = ask_4;

alert(appData.budget / 30);