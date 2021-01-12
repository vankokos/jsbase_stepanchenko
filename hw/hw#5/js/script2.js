// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.

var userNum1 = +prompt("Первое число :");
var userNum2 = +prompt("Второе число :");
var userSign = prompt("Знак арифметической операции:");

if (Number.isNaN(userNum1) || Number.isNaN(userNum2)) {
    console.log("not a number")
} 

var Calculator = {
    add: function (a, b) {
        var result = a + b;
        return result
    },
    deduct: function (a, b) {
        var result = a - b;
        return result
    },
    multiply: function (a, b) {
        var result = a * b;
        return result
    },
    divide: function (a, b) {
        var result = a / b;
        return result
    },
}

if (userSign === "+") {
    console.log(Calculator.add(userNum1, userNum2))
} else if (userSign === "-") {
    console.log(Calculator.deduct(userNum1, userNum2))
} else if (userSign === "*") {
    console.log(Calculator.multiply(userNum1, userNum2))
} else if (userSign === "/") {
    console.log(Calculator.divide(userNum1, userNum2))
} else {
    console.log("not a sign");
}
