var userName = prompt ("Как вас зовут?");
console.log ("userName")
var userSurname = prompt ("Какая ваша фамилия?");
console.log ("userSurname")
var userAge = prompt ("Какой ваш возраст?");
console.log ("userAge")
var userAgeVar;
console.log ("userAgeVar")

function userAgeVar(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];  
    return number+" "+titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
console.log ("userAgeVarDeclination")

var userInfo = alert( "Ваше имя - " + userName + ", Ваша фамилия - " + userSurname + ", Ваш возраст - " + userAgeVar(userAge, ['год', 'года', 'лет']) );
console.log ("userInfo")
