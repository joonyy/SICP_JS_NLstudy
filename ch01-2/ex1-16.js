function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}
function fast_expt(a,b,n){//a*b^n
    return n===0
          ?a
          :is_even(n)
          ?a*square(fast_expt(1,b,n/2))//a*(b^(n/2))
          :b*fast_expt(a,b,n-1);//ab(b^n-1)
}

console.log(fast_expt(2,3,4));