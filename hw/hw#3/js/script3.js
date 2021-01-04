// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

var myArray = +prompt("Введите число")
var newArray = new Array(myArray)

for (var i = 0; i < newArray.length; i++){
  newArray[i] = new Array(3)
      
  for (var j = 0; j < 3; j++){
    if (i % 2 == 0) { 
      newArray[i][j] = "Even"
    } else { 
      newArray[i][j] = "Odd"
    }  
  } 
} 

console.log(newArray)