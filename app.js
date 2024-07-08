const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
let fibonacciSeries = 'Fibonacci Series: ';

for (let i = 1; i <= number; i++) {
    fibonacciSeries += n1 + ' ';
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

alert(fibonacciSeries);
