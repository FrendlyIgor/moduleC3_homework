//Инкапсуляция
function ab() {
    let a = 1;   
}
console.log(a)
console.log('------------------------------')

// Контекст this

const user = {
    name: 'Ivan',
    getName: function () {
        console.log(this);
    }
}
user.getName()
console.log('---------------------------');

//Функция - КОНСТРУКТОР

function Candy (weight){
    this.tasty = 'good',
    this.getWeight = function(){
        console.log(`Вес составляет ${weight} грамм`)
    }
}
const twix = new Candy(47);
const snickers = new Candy(50);

twix.getWeight();
snickers.getWeight()