// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//        содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

var team = new Array(
    p1 = {
        name: name = prompt("Имя 1-го сотрудника:"), 
        sName: sName = prompt("Фамилия 1-го сотрудника"),
        age: age = prompt("Возраст 1-го сотрудника"),
        occupation: occupation = prompt("Должность 1-го сотрудника"),
        show: function show() {
            console.log("Имя 1-го сотрудника: " + p1.name);
            console.log("Фамилия 1-го сотрудника: " + p1.sName);
            console.log("Возраст 1-го сотрудника: " + p1.age);
            console.log("Должность 1-го сотрудника: " + p1.occupation);
        }
    },

    p2 = {
        name: name = prompt("Имя 2-го сотрудника:"), 
        sName: sName = prompt("Фамилия 2-го сотрудника:"),
        age: age = prompt("Возраст 2-го сотрудника:"),
        occupation: occupation = prompt("Должность 2-го сотрудника:"),
        show: function show() {
            console.log("Имя 2-го сотрудника: " + p2.name);
            console.log("Фамилия 2-го сотрудника: " + p2.sName);
            console.log("Возраст 2-го сотрудника: " + p2.age);
            console.log("Должность 2-го сотрудника: " + p2.occupation);
        }
    },
)

team[0].show()
team[1].show()