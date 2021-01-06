// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность

var num1 = +prompt("Введите число");
var num2 = +prompt("Введите степень");

function test (a,b) {
    var result = 1;
    if (isNaN(a) || isNaN(b)) {
        console.log("not a number")
    }

    for(let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

console.log(test(num1, num2))