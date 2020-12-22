
var x1 = prompt("Укажите координату X первой точки")
console.log("x1")
var y1 = prompt("Укажите координату Y первой точки")
console.log("y1")
var x2 = prompt("Укажите координату X второй точки")
console.log("x2")
var y2 = prompt("Укажите координату Y второй точки")
console.log("y2")

var k = ((y1 - y2) / (x1 - x2))
console.log("k")
var b = (y2 - k * x2)
console.log("b")

var k = alert("Ваш ответ: " + "y = " + k + "x + " + b)
console.log("k")