// 1. Сделать собственные примеры методов применяемых для массивов.


let colors = ["red", "blue", "green", "purple"];
    console.log("original color array: " + colors);

colors.sort();
    console.log("color array sorted in alphabetical order: " + colors);

colors.shift();
    console.log("first element deleted: " +colors);

let numbers = ["1", "2", "3"];
    console.log("original number array: " + numbers);

let colorsNumbers = colors.concat(numbers);
    console.log("numbers and colors array: " + colorsNumbers);

colorsNumbers.reverse();
    console.log("reversed numbers and colors array: " + colorsNumbers);

console.log(colorsNumbers.join("-"));



