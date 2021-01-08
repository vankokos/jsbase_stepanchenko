// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.

var firstNumber = +prompt("Введите первое число");
console.log("first number is: " + firstNumber)
var secondNumber = +prompt("Введите второе число")
console.log("second number is: " + secondNumber)
var sign = prompt("Введите знак арифметической операции")
console.log("mathematical symbol is: " + sign)


function calculate(a, b, sign) {
    var result;

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return;
    } 
    
    switch (sign) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;
            
        default: 
            console.log("not a sign");
    }

    if (result !== undefined) {
        console.log("your result is: " + result);
    } else {
        console.log("no result")
    }
}

calculate(firstNumber, secondNumber, sign)
