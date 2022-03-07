function abs(x) {
    return x >= 0 ? x : - x;
}

function cube(x) {
    return x * x * x;
}
function p(x) {
    return 3 * x - 4 * cube(x);
}
function sine(angle) {
    return ! (abs(angle) > 0.1)
           ? angle
           : p(sine(angle / 3));
}

console.log(sine(12.15));
/*
sine(12.15)
p(sine(4.05))
p(p(sine(1.35)))
p(p(p(sine(0.45))))
p(p(p(p(sine(0.15)))))
p(p(p(p(p(sine(0.05))))))
1. p is applied 5 times
2. 함수 자체가 angle에 들어가는 부분을 0.1보다 작아질 때까지 3으로 나누기 때문에, O(log3(n))의 시간복잡도를 가진다.
계산 단계는 log3(n)만큼 커지고, 기억공간 또한 같은 크기로 자라난다.즉, sine(a)를 하면, log3(a)에 비례하여
계산 단계와 기억공간이 증가한다.

*/
