// 3. Перепишите с тернарным оператором
//             if (a > b) {
//                 max = a;
//             } else {
//                 max = b;
//             }
            
//             console.log(max);

var a = prompt("введите число");
var b = prompt("введите число");
var max;

max = (a > b) ? a : b
console.log(max)