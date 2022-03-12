function double(n){
    return n+n;
}
function is_even(n){
    return n%2===0
}
function halve(n){
    return is_even(n)
          ?n/2
          :n;
}
function multiple(a,b){
    return b===1
          ?a
          :a===1
          ?b
          :a===0||b===0
          ?0
          :is_even(a)
          ?double(multiple(halve(a),b))
          :b+multiple(a-1,b);
}   
console.log(multiple(3,4));