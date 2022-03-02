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
/*���׿����ڸ� �̷� ������ �ۼ��ϸ�, sqrt_iter������ ������ ���� ���� ����ȴ�.
1)is_good_enough(guess,x)�� ���.(������ �������� �Ǻ�.)
2)���� ���̶��, guess�� return�Ѵ�.
3)���� �����̶��, sqrt_iter(improve(guess, x),x)�� ���.
3������, improve(guess,x)�� ����ؾ� �Ѵ�. �� ���� A1 �� ����ϸ�, sqrt_iter(A1,x)�� �� ���̴�.
��, sqrt_iter(improve(guess,x),x)=> sqrt_iter(A1,x)=>sqrt_iter(A2,x)=>.....
���� �귯���ٵ�, �� ��� is_good_enough�� �Ź� üũ�Ѵ�. �׷��� ���࿡ is_good_enough�� ���� �� ���, �ű⼭
���߰� return�� ���־�� ������, false�� ������ ���� üũ�� ���־�� �ϱ� ������, ������ ������ �ʰ� �ȴ�.
���� ��������, ���� ������ ��� Ȯ�����ֱ� ���� �ݺ��� ��� �ϰ� �ִ� ��.*/