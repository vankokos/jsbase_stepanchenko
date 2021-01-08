// Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново


function getComputerAnswer() {
    var computerChoice = Math.random()
    if(computerChoice < 0.33) {
      computerChoice = "Камень"
    } else if (computerChoice < 0.66) {
      computerChoice = "Ножницы"
    } else {
      computerChoice = "Бумага"
    }
    
    return computerChoice.toLowerCase();
}
  
function getUserAnswer() {
    var answer = prompt("Выберите из трёх вариантов - Камень, Ножницы, Бумага");
    return answer.toLowerCase();
}
  
function game() {
    var user = getUserAnswer();
    var computer = getComputerAnswer();
    
    if (user === computer) {
      return "draw";
    }
    
    if ((user === "камень" && computer === "ножницы") || 
      (user === "ножницы" && computer === "бумага") || 
      (user === "бумага" && computer === "камень")) {
      return "Win";
    } else {
      return "loss";
    }
}

do {
    console.log(game())
    var replayGame = confirm ("Хотите сыграть еще раз?")
} while(replayGame)






