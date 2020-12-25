// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var firstNumber;
var secondNumber;
var thirdNumber;
var averageNumber

firstNumber = Number(prompt("Первое число"));
console.log("firstNumber " + firstNumber)
secondNumber = Number(prompt("Второе число"));
console.log("secondNumber " + secondNumber)
thirdNumber = Number(prompt("Третье число"));
console.log("thirdNumber " + thirdNumber)

averageNumber=((firstNumber + secondNumber + thirdNumber) / 3)
console.log("averageNumber = " + averageNumber)

if (firstNumber===secondNumber || firstNumber===thirdNumber || secondNumber===thirdNumber) {
    averageNumber = alert("Вы не можете вводить одинаковые числа");
    console.warn ("identicalNumberError")
} else {
    averageNumber = alert ("Среднее арифметическое выбранных вами чисел (" + firstNumber + "," + secondNumber + "," + thirdNumber + ") =" + averageNumber );
    console.log("averageNumberAlert")
}


