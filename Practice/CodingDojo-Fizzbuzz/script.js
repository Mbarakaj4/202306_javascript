/* Write a code that goes from 1 to 100 that: 
   - For each multiply of three, prints Fizz
   - For each multiply of five, prints Buzz
   - And for numbers that are both multiples of three and five, print FizzBuzz
*/

var numbers = [];

numberGeneration();
fzbzNumbers();
//Print the numbers array one element at a time
for (element in numbers) {
    console.log(numbers[element]);
}

function numberGeneration() {
    var n = 1;
    //While n is less than or equal to 100, push n to the numbers array
    while (n <= 100) {
        numbers.push(n);
        n += 1;
    }
}

function fzbzNumbers() {
    for (element in numbers) {
        //If the element is a multiple of 3, then, replace it with "fizz"
        if (numbers[element] % 3 === 0) {
            numbers[element] = "Fizz";
        }
        //If the element is a multiple of 5, then, replace it with "buzz"
        if (numbers[element] % 5 === 0) {
            numbers[element] = "Buzz";
        }
        //If the element is a multiple of 3 and 5, then, replace it with "fizzbuzz"
        if (numbers[element] % 3 === 0 && element % 5 === 0) {
            numbers[element] = "FizzBuzz";
        }
    }
}