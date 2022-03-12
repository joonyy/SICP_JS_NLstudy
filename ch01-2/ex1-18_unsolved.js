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