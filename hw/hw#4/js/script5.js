// Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново

var userSign = prompt("Выберите из трёх вариантов - Камень, Ножницы, Бумага (с большой буквы потому-что лень писать toUpperCase!)")
console.log("Выбор пользователя: " + userSign)
var computerChoice = Math.random()

if(computerChoice <= 0.33) {
    computerChoice = "Камень"
} else if (computerChoice > 0.33 && computerChoice < 0.66) {
    computerChoice = "Ножницы"
} else {
    computerChoice = "Бумага"
}

console.log("Выбор компьютера: " + computerChoice)

function game(a, random) {
    random = computerChoice;
    var result;
    // var playAgain;

    if (a == "Камень" && random == "Ножницы") {
        console.log("Вы выиграли!")
        result == ("win")

    } else if (a == "Камень" && random == "Бумага") {
        console.log("Вы проиграли!")
        result == ("loss")

    } else if (a == "Камень" && random == "Камень" ) {
        console.log("Ничья")
        result == ("draw")

    } else if (a == "Ножницы" && random == "Камень" ) {
        console.log("Вы проиграли!")
        result == ("loss")

    } else if (a == "Ножницы" && random == "Бумага") {
        console.log("Вы выиграли!")
        result == ("win")

    } else if (a == "Ножницы" && random == "Ножницы") {
        console.log("Ничья")
        result == ("draw")

    } else if (a == "Бумага" && random == "Ножницы") {
        console.log("Вы проиграли!")
        result == ("loss")

    } else if (a == "Бумага" && random == "Камень") {
        console.log("Вы выиграли!")
        result == ("win")

    } else if (a == "Бумага" && random == "Бумага") {
        console.log("Ничья")
        result == ("draw")
    } else {
        result == ("Вы ввели неверный знак")
    }
    
    // if (result = "draw" || result == "win" || result == "loss") {
    //     var playAgain = confirm("Хотите сыграть снова?")
    // }

    // while (playAgain === true) {
    //     game(a, random)
    // }

    return result
}


game(userSign)





