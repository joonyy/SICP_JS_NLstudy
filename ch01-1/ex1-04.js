function plus(a, b) { return a + b; }

function minus(a, b) { return a - b; }

function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

console.log(a_plus_abs_b(5, -4))
    //빼는수(b)가 양수이면 a+b를, 빼는 수(b)가 음수이면 a-b를 실행하여, a-|b|를 실행하는 코드이다.