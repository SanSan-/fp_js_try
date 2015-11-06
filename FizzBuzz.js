function check(i) {
    if (i % 15 === 0) return "FizzBuzz";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";
    return i;
}

function fizzbuzz(n, k, callback) {
    k = typeof k !== 'undefined' ? k : 1;
    if (k <= n) fizzbuzz(n, k + 1, console.log(check(k)));
}

fizzbuzz(100);

function fizzbuzzarray(n, k, arr) {
    k = typeof k !== 'undefined' ? k : 1;
    arr = typeof arr !== 'undefined' ? arr : [];
    if (k > n) {
        return arr;
    } else {
        arr.push(""+check(k));
        return fizzbuzzarray(n, k + 1, arr);
    }
}

console.log(fizzbuzzarray(100));