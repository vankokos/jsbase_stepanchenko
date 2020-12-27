// 1. Напишите цепочку операторов if / else if, чтобы выполнить следующие условия (num вводит пользователь), результат вывести в консоль:
// num < 5 - "Tiny"
// num < 10 - "Small"
// num < 15 - "Medium"
// num < 20 - "Large"
// num >= 20 - "Huge"


var num = prompt("Введите число")
console.log ("picked number is" + num)

if (num < 5) {
    console.log(num + "=Tiny")
} else if (num < 10) {
    console.log(num + "=Small")
} else if (num < 15) {
    console.log(num + "=Medium")
} else if (num < 20) {
    console.log(num + "=Large")
} else if (num >=20) {
    console.log (num = "=Huge")
}