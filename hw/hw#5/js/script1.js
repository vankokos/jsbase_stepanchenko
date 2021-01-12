// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

var PointOne = {
    x: 10,
    y: 10
}
var PointTwo = {
    x: -10,
    y: 10
}
var PointThree = {
    x: 10,
    y: -10
}
var PointFour = {
    x: -10,
    y: -10
}

function GetQuadrant (x,y) {
    var result;

    if (x > 0 && y > 0) {
        var topRight = "Верхний правый квадрант";
        return result = topRight
    } else if (x < 0 && y > 0) {
        var topLeft = "Верхний левый квадрант";
        return result = topLeft
    } else if (x > 0 && y < 0) {
        var topLeft = "Нижний правый квадрант";
        return result = topLeft
    } else if (x < 0 && y < 0) {
        var topLeft = "Нижний левый квадрант";
        return result = topLeft
    }
}

console.log(GetQuadrant(PointOne.x, PointOne.y))
console.log(GetQuadrant(PointTwo.x, PointTwo.y))
console.log(GetQuadrant(PointThree.x, PointThree.y))
console.log(GetQuadrant(PointFour.x, PointFour.y))

