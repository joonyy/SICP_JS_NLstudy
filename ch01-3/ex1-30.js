function cube(x) {
    return x * x * x;
}
function inc(k){
    return k+1;
}
function sum_recursive(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum_recursive(term, next(a), next, b);
}

function sum_iter(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a),result+term(a));
    }
    return iter(a,0);
}
console.log(sum_recursive(cube,1,inc,10));
console.log(sum_iter(cube,1,inc,10));