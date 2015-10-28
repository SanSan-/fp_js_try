function add(a){
    return function(b){
        return a+b
    }
}

console.log(add(3)(4));

function multi_add(a) {
     return function(b){
         if (typeof b !== 'undefined') {
             a = a + b;
             return arguments.callee;
         } else {
             return a;
         }
     }
}

console.log(multi_add(2)(3)(4)(5)());

function operation(f) {
    return function(a) {
        return function(b) {
            return f(a,b)
        }
    }
}

function plus(a,b) {return a+b}
function minus(a,b) {return a-b}
function mult(a,b) {return a*b}
function div(a,b) {return a/b}

function add2(a) {return operation(plus)(a)}
function mult2(a) {return operation(mult)(a)}

console.log(operation(plus)(2)(6));
console.log(add2(2)(6));
console.log(mult2(2)(6));

addFive = add2(5);
console.log(addFive(4));
console.log(addFive(3));
console.log(addFive(2));
