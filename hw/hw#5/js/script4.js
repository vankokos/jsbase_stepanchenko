// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.

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

function salary(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].occupation == "director") {
            a[i].salary = 3000
        } else if (a[i].occupation == "manager") {
            a[i].salary = 1500
        } else if (a[i].occupation == "programmer") {
            a[i].salary = 2000
        } else {
            a[i].salary = 1000
        }
    }
}

salary(team);

for (var i = 0; i < team.length; i++) {
    team[i].show()
    console.log("Зарплата: " + team[i].salary);
}
