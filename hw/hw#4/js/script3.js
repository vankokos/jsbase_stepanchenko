// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// Функция должна вернуть "Even" или "Odd";

function isEven(num) {
  return(num % 2 == 0) ? "even" : "odd"
}

console.log(isEven(10))
console.log(isEven(11))