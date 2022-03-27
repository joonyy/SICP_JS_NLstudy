//a.
function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}
//ÁÖ¾îÁø is_prime
function square(x){
    return x*x;
}
function inc(x){
    return x+1;
}
function gcd(a,b){
        return b===0?a:gcd(b,a%b);
}

function filtered_accumulate(combiner, null_value, term, a, next, b,filter){
    return a>b
          ?null_value
          :filter(a)
          ?combiner(term(a),filtered_accumulate(combiner,null_value,term,next(a),next,b,filter))
          :filtered_accumulate(combiner,null_value,term,next(a),next,b,filter)
}
function a(a,b){
    function sum(a,b){
        return a+b;
    }
    return filtered_accumulate(sum,0,square,a,inc,b,is_prime);
}

function b(n){
    function multiple(a,b){
        return a*b;
    }
    function itself(a){
        return a;
    }
    function surroso(a){
        return gcd(a,n)===1;
    }
    return filtered_accumulate(multiple,1,itself,0,inc,n,surroso);
}
console.log(a(4,10));
console.log(b(8));