/* Array Challenges
   1. Always Hungry
   2. High Pass Filter
   3. Better than average
   4. Array Reverse
   5. Fibonacci Array */


function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("delicioso");
            count++;
        }
    }
    if (count == 0) {
        console.log("Tengo hambre");
    }
}
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
