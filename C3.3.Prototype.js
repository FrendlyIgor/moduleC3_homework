const person = {
    city: 'Moscow'
}
//Создаём объект с прототипом
const student = Object.create(person);
//Добавляем собственное свойство объекту student
student.ownCity = 'St.Peterburg';
//обращаемся к свойству, которого нет в объекте student, но есть в его прототипе person
console.log(student.city);
console.log('-------------------------');
//перебираем свойства объекта
for (let key in student) {
    console.log(key);
}
console.log('--------------------------');
//вывести только свойства объекта, БЕЗ ПРОТОТИПА!!!!
for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key);
    }
}
console.log('----------------------')
/*Написать, функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

function funObj (obj){
    for (key in obj){
        if(obj.hasOwnProperty(key)) {
            console.log(key, obj[prop]);
        }
    }
}
console.log('-------------------')

/*Написать функцию, которая принимает в качестве аргументов строку и объект,
 а затем проверяет, есть ли у переданного объекта свойство с данным именем.
  Функция должна возвращать true или false.*/
function newFunc(str, obj) {
    return (str in obj);
}
console.log('-------------------')
//Написать функцию, которая создает пустой объект, но без прототипа.
function createObjWithoutProto() {
    return Object.create(null);
}