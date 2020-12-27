// 5. Остановите цикл, когда i = 7 и выведите в консоль все числа до 7 пропустив 3.
//             for (var i = 0; i < 10; i++) {}

var i = Number(0);

for (var i = 0; i <= 10; i++) {
    if (i===7) {
        break
    } else if (i===3) {
        i=null;
    }
    
    console.log(i)
}

