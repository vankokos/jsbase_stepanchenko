// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//        содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

let team = []
let newUser;

do {
    team.push({
        name: name = prompt("Имя сотрудника:"), 
        sName: sName = prompt("Фамилия сотрудника"),
        age: age = prompt("Возраст сотрудника"),
        occupation: occupation = prompt("Должность сотрудника"),
        show: function show() {
            console.log("Имя сотрудника: " + this.name);
            console.log("Фамилия сотрудника: " + this.sName);
            console.log("Возраст сотрудника: " + this.age);
            console.log("Должность сотрудника: " + this.occupation);
        }
    })
    newUser = confirm("Хотите добавить нового сотрудника?")
} while (newUser)

for (let i = 0; i < team.length; i++) {
    team[i].show();
}