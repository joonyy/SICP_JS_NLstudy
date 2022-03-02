function inc(x) {
    return x + 1;
}
function dec(x) {
    return x - 1;
}

function plus_1(a, b) {
    return a === 0 ? b : inc(plus_1(dec(a), b)); 
}

console.log(plus_1(4, 5));
/*
==>plus(4,5) 
=>inc(plus(3,5))
=>inc(inc(plus(dec(3),5)))
=>inc(inc(inc(plus(dec(2),5))))
=>inc(inc(inc(inc(plus(dec(1),5)))))
=>inc(inc(inc(inc(plus(0,5)))))
->inc(inc(inc(inc(5))))
=>inc(inc(inc(6)))
->inc(inc(7))
->inc(8)
->9 
선형 재귀 프로세스 */
function plus_2(a, b) {
    return a === 0 ? b : plus_2(dec(a), inc(b));
}

console.log(plus_2(4, 5));
/*
=>plus(4,5)
->plus(3,6)
->plus(2,7)
->plus(1,8)
->plus(0,9)
->9 
선형 반복 프로세스*/ 