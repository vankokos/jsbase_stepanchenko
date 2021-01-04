// 4. Создать два произвольных массива: 
// один массив - любимая спортивная команда / модели автомобилей / города, 
// во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
// Из двух массивов сделайте ассоциативный массив.
// Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

var teamStarters = new Array ("Iguodala", "Herro", "Butler", "Adebayo", "Robinson")
    console.log("Miami Heat starters: " + teamStarters)
var jerseyNumber = new Array (28,14,22,13,55)
    console.log("Miami Heat jersey numbers:" + jerseyNumber )
var associative_array=new Object()

for(var i = 0; i < 5; i++){
  associative_array[teamStarters[i]]=jerseyNumber[i];
}

console.log(associative_array)