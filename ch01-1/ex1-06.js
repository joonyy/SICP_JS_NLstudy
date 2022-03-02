function conditional(predicate, then_clause, else_clause) {		    
    return predicate ? then_clause : else_clause;
}

function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
                       guess,
                       sqrt_iter(improve(guess, x),
                                 x));
}

console.log(sqrt_iter(3, 25));
/*삼항연산자를 이런 식으로 작성하면, sqrt_iter에서는 다음과 같이 식이 실행된다.
1)is_good_enough(guess,x)를 계산.(참인지 거짓인지 판별.)
2)만약 참이라면, guess를 return한다.
3)만약 거짓이라면, sqrt_iter(improve(guess, x),x)를 계산.
3번에서, improve(guess,x)를 계산해야 한다. 이 값을 A1 로 계산하면, sqrt_iter(A1,x)가 들어갈 것이다.
즉, sqrt_iter(improve(guess,x),x)=> sqrt_iter(A1,x)=>sqrt_iter(A2,x)=>.....
으로 흘러갈텐데, 이 경우 is_good_enough를 매번 체크한다. 그러나 만약에 is_good_enough가 충족 된 경우, 거기서
멈추고 return을 해주어야 하지만, false인 경우까지 전부 체크를 해주어야 하기 때문에, 루프가 끝나지 않게 된다.
답은 구했지만, 뒤의 내용을 계속 확인해주기 위해 반복을 계속 하고 있는 셈.*/