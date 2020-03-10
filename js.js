let money;
let time;

function start() {
     money = prompt("Ваш бюджет на месяц?", '');
     time = +prompt("Введите дату в формате YYYY-MM-DD", '');

     while ( isNaN(money) || money == "" || money == null ) {
        money = prompt("Ваш бюджет на месяц?", '');
     }
}
start();


let appData = {
    budget: money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : true
};


function chooseExpenses() {
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
}
chooseExpenses();


function cheackIncome() {

    if(appData.saving == true){
        let save = +prompt("Какова сумма депозита?"),
            percent = +prompt("Ежемесячный процент?");
        
            appData.monthIncome = save/100/12*percent;
            alert("Сумма полученных процентов" + appData.monthIncome.toFixed(2));
    }
}
cheackIncome();

function detectDayBudget() {
     appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay );
}
detectDayBudget();


   
    function detectLevel() {

        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }  else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка")
        } else if  ( appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка")
        }  else {
            console.log("Произошла ошибка")
        }
            }
  detectLevel()

   function chooseOptExpenses() {
   
      for (let i = 1; i <= 3; i++) {
       let answer = +prompt("Статья необязательных расходов?");
         appData.optionalExpenses[i] = answer;
         }

        }
  chooseOptExpenses()

