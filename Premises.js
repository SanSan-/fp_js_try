function premises(n,k,arr) {
    function check_loop(i) {
        function check(acc) {
            if (acc.length===0) {
                return true;
            } else if (i%acc.shift()===0) {
                return false;
            } else {
                return check(acc);
            }
        }
        if (check([].concat(arr))) {
            arr.push(i);
            return arr;
        } else {
            return arr;
        }
    }
    k = typeof k !== 'undefined' ? k : 2;
    arr = typeof arr !== 'undefined' ? arr : [];
    if (k > n) {
        return arr;
    } else {
        return premises(n,k+1,check_loop(k));
    }
}

console.log(premises(100));