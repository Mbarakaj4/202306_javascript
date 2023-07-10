/* Loop Challenges: 
1. Print odds 1-20
2. Decreasing Multiples of 3
3. Print the sequence
4. Sigma 
5. Factorial*/

function printOdds() {
    for (var i = 1; i <= 20; i += 2) {
        console.log(i);
    }
}

function print3() {
    for (var i = 100; i > 0; i --) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}


function printSequence() {
    for (var i = 4; i > -4; i -= 1.5) {
        console.log(i);
    }
}

function sigma() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

function factorial() {
    var product = 1;
    for (var i = 1; i <= 12; i++) {
        product *= i;
    }
    console.log(product);
}