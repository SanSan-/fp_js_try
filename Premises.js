function premises(n) {
    function prem(k,arr){
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
        if (k > n) {
            return arr;
        } else {
            return prem(k+1,check_loop(k))
        }
    }
    return prem(2,[])
}

console.log(premises(100));