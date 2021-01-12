// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
//        Параметр для сортировки принимается от пользователя.
//        После выполнения функции — вывести информацию о сотрудниках.

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

var sortable = prompt("name, sName, age, occupation, salary")

team.sort(function(a,b) {
    switch (sortable) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else {return 0;}
            break;

        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else {return 0;}
            break;
        
        case "occupation":
            if (a["occupation"] > b["occupation"]) {
                return 1;
            }
            else if (a["occupation"] < b["occupation"]) {
                return -1;
            } else {return 0;}
            break;

        case "age":
            return a["age"] - b["age"];
            break;

        case "salary":
            return a["salary"] - b["salary"];
            break;

        default:
            alert("None");
    }
}
)

for (var i = 0; i < team.length; i++) {
    team[i].show()
}