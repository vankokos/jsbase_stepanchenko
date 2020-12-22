var firstNumber = 100
console.log ("firstNumber")
var secondNumber = 200
console.log ("secondNumber")
var tempVar
console.log ("tempVar")

var tempVar = firstNumber 
var firstNumber = secondNumber 
var secondNumber = tempVar
console.log ("swapped firstNumber for secondNumber")

alert("Первое число = " + firstNumber + ", второе число = " + secondNumber)
console.log ("alertSwap")
