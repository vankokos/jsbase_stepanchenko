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
} 

while (numberTwo <= numberOne) {
    numbersBetweenSum+=numberTwo;  
    numberTwo++;
}

console.log(numbersBetweenSum)