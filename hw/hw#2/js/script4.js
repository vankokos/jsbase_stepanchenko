// 4. Дано два числа A и B где (A < B). 
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   

var numberOne = Number(prompt("Введите первое число"));
console.log(numberOne);
var numberTwo = Number(prompt("Введите второе число"));
console.log(numberTwo);
var numbersBetweenSum = 0;

while (numberOne <= numberTwo) {
    numbersBetweenSum+=numberOne;  
    numberOne++;

    if (numberOne % 2 !== 0) {
        console.log(numberOne)
    }

    if (numberOne == numberTwo) {
        alert("error")
    }
} 
console.log(numbersBetweenSum)