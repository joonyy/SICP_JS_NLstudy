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
2. �Լ� ��ü�� angle�� ���� �κ��� 0.1���� �۾��� ������ 3���� ������ ������, O(log3(n))�� �ð����⵵�� ������.
��� �ܰ�� log3(n)��ŭ Ŀ����, ������ ���� ���� ũ��� �ڶ󳭴�.��, sine(a)�� �ϸ�, log3(a)�� ����Ͽ�
��� �ܰ�� �������� �����Ѵ�.

*/
