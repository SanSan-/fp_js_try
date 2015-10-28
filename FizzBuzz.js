function check(i) {
    if (i % 15 === 0) return "FizzBuzz";
    if (i % 3 === 0) return "Fizz";
    if (i % 5 === 0) return "Buzz";
    return i;
}

function fizzbuzz(n) {
    function fb_loop(k, callback) {
        if (k <= n) fb_loop(k + 1, console.log(check(k)))
    }
    fb_loop(1)
}

fizzbuzz(100);

function fizzbuzzarray(n) {
    function fb_loop(k, arr) {
        if (k > n) {
            return arr;
        } else {
            arr.push(""+check(k));
            return fb_loop(k + 1, arr);
        }
    }
    return fb_loop(1, [])
}

console.log(fizzbuzzarray(100));