// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var firstNumber = +prompt("Первое число");
console.log(firstNumber)
var secondNumber = +prompt("Второе число");
console.log(secondNumber)
var thirdNumber = +prompt("Третье число");
console.log(thirdNumber)

if (firstNumber > secondNumber && firstNumber > thirdNumber ) {
    console.log("Первое число (" +firstNumber + ") больше второго (" + secondNumber + ") и третьего (" + thirdNumber + ")")
} else if (secondNumber > firstNumber && secondNumber > thirdNumber)  {
    console.log("Второе число (" +secondNumber + ") больше первого (" + firstNumber + ") и третьего (" + thirdNumber + ")")
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
    console.log ("Третье число (" +thirdNumber + ") больше второго (" + secondNumber + ") и первого (" + firstNumber + ")")
}
