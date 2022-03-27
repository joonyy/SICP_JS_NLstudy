function abs(x) {
    return x >= 0 ? x : - x;
}

function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < 0.00001;
    }
    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next)
               ? next
               : try_with(next);
    }
    return try_with(first_guess);
}

function term(x) {
    return fixed_point(x => 1 + 1 / x, 2);
}

console.log(term(4));
/*
x= 1+ 1/x
x^2=x+1
x^2-x-1=0
������ �Ŀ� �����ϸ� Ȳ�ݺ� ���´�. ��, �� �ٿ� �ִ� ������������ �� �� ���� ���� Ȳ�ݺ����̶�� ��.
 */