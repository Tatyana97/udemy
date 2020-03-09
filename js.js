let money = prompt("Ваш бюджет на месяц?", '');
let time = +prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
    budget: money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


for (let index = 0; index < 2; index++) {
    let ask_1 = prompt("Введите обязательную статью расходов в этом месяце", '');
    let ask_2 = prompt("Во сколько обойдется?", '');
    
    if ( typeof(ask_1) ==='string' && typeof(ask_1) != null && typeof(ask_2) != null
    && ask_1 != ""  && ask_2 != "" && ask_1.length < 50 )  {
        console.log("done")
        appData.expenses[ask_1]= ask_2;
    } else{
        console.log ("bad result");
        index--;                                                                                 
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay );

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
} if ( appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
}


