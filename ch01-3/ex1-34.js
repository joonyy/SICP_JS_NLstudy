function square(n){
    return n*n;
}
function f(g) {
    return g(2);
 }
 console.log(f(square)); 
 console.log(f(z => z * (z + 1)));

 /*
 f(f)�� �Է��Ѵٸ�,
 f(2)�� ��ȯ�� ���̰�,
 f(2)�� 2(2)�� ��ȯ�� ���̴�.
 2(2)�� �Լ��� �ƴϹǷ�, ������ �� ���̴�. 
 */
console.log(f(f));