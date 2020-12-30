// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
// Описание:
// п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
// п.2 Запросите у пользователя название элемента массива
// п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
// п.3.2 Если в массиве такого элемента нет - добавить в конец массива
// п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
// п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)

var heavyweights = ["Ali", "Tyson", "Lewis", "Joshua", "Fury", "Wilder", "Marciano"]
    console.log("heavyweights array: " + heavyweights)

var heavyweightsElement = prompt("Name of your favourite heavyweight boxer: ")
    console.log("users heavyweight: " + heavyweightsElement)

if (heavyweightsElement==heavyweights[0]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(1,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)

} else if (heavyweightsElement==heavyweights[1]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(2,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)

} else if (heavyweightsElement==heavyweights[2]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(3,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)

} else if (heavyweightsElement==heavyweights[3]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(4,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)

} else if (heavyweightsElement==heavyweights[4]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(5,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)

} else if (heavyweightsElement==heavyweights[5]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(6,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)

} else if (heavyweightsElement==heavyweights[6]) {
    var heavyweightsElementTwo = prompt("Name that you entered is already on the list, enter something else: ")
        console.log(heavyweightsElementTwo)

    heavyweights.splice(7,0, heavyweightsElementTwo)
    console.log("heavyweight array:" + heavyweights)
} else {
    heavyweights.splice(7,0, heavyweightsElement);
    console.log("heavyweight array:" + heavyweights)
}