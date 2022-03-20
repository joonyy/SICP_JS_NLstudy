function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}
function double(n){
    return n+n;
}
function halve(n){
    return is_even(n)
          ?n/2
          :n;
}

function fast_times_iter(total,a,b){
    return b===1
          ?total+a
          :a===0||b===0
          ?0
          :is_even(b)
          ?fast_times_iter(total,double(a),halve(b))
          :fast_times_iter(total+a,a,b-1);
}

console.log(fast_times_iter(0,3,5));