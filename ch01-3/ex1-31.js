//iterative process
function num(n){
    return n;
}
function inc(k){
    return k+1;
}

function product_iter(term,a,next,b){
    function iter(a, result){
        return a>b
              ?result
              :iter(next(a),result*term(a));
    }
    return iter(a,1);
}
//recursive product
function product_r(term, a, next, b) {
    return a > b
           ? 1
           : term(a) * product_r(term, next(a), next, b);
}
function factorial(n){
    return product_iter(num,1,inc,n);
}

function pi(n){
    function y(i){
        return i%2===1
              ?(1+i)/(2+i)
              :(2+i)/(1+i);
    }
    return 4*product_iter(y,1.0,inc,n);
}

console.log(pi(1111));
console.log(factorial(5));