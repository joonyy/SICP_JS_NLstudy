/*function num(n){
    return n;
}
function inc(k){
    return k+1;
}
function accumulate_recursive(combiner, null_value, term, a, next, b){
    return a>b  
          ?null_value
          :combiner(term(a),accumulate_recursive(combiner,null_value,term,next(a),next,b))
}

function sum_recursive(term,a,next,b){
    function plus(x,y){
        return x+y;
    }
    return accumulate_recursive(plus,0,inc,b);
}

function product_recursive(term, a, next, b) {
    function multiple(x,y){
        return x*y;
    }
    return accumulate_recursive(multiple,1,term,a,inc,b);
}

function accumulate_iterative(combiner, null_value, term, a, next, b){
  function iter(a,result){
      return a>b
            ?result
            :iter(next(a),combiner(term(a),result));
  }
    return iter(a,null_value);
}

function sum_iterative(term,a,next,b){
    function plus(x,y){
        return x+y;
    }
    return accumulate_iterative(plus,0,term,a,inc,b);
}

function product_iterative(term,a,next,b){ 
    function multiple(x,y){
        return x*y;
    }
        return accumulate_iterative(multiple,1,term,a,inc,b);
}
function term(n){
    return n;
}
console.log(sum_iterative(term,5,inc,7));
console.log(sum_recursive(term,5,inc,7));
console.log(product_iterative(term,4,inc,6));
console.log(product_recursive(term,4,inc,6));
*/

function factorial(n) {
    function term(i) {
        return i;
    }
    function next(i) {
        return i + 1;
    }
    return product_r(term, 1, next, n);
}

//pi product
function pi(n) {
    function is_odd(i) {
        return i % 2 === 1;
    }
    function term(i) {
        return is_odd(i)
               ? (i + 1) / (i + 2)
               : (i + 2) / (i + 1);
    }
    function next(i) {
        return i + 1;
    }
    return 4 * (product_i(term, 1.0, next, n));
}

//recursive process
function accumulate_r(combiner, null_value, term, a, next, b) {
    return a > b
           ? null_value
           : combiner(term(a), 
                      accumulate_r(combiner, 
                                   null_value, 
                                   term, next(a), next, b));
}
function sum_r(term, a, next, b) {
    function plus(x, y) {
        return x + y;
    }
    return accumulate_r(plus, 0, term, a, next, b);
}
function product_r(term, a, next, b) {
    function times(x, y) {
        return x * y;
    }
    return accumulate_r(times, 1, term, a, next, b);
}

//iterative process
function accumulate_i(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), combiner(term(a), result));
    }
    return iter(a, null_value);
}
function sum_i(term, a, next, b) {
    function plus(x, y) {
        return x + y;
    }
    return accumulate_i(plus, 0, term, a, next, b);
}
function product_i(term, a, next, b) {
    function times(x, y) {
        return x * y;
    }
    return accumulate_i(times, 1, term, a, next, b);
}

console.log(factorial(5));