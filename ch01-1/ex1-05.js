function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}
console.log(test(0,p(0)));
/*���ѷ����� ����. p()���� p()�� return �ϹǷ�, ���� ���� ������ ������ �Ǵ� ���̴�.
applicative order evaluation : �� ����� ��� ���� ��� ��츦 �� ����ϰ� �ȴ�. �׷��Ƿ� 
return x===0?0:p();=> return ( true ?0 :p()); 
p()= p()=p()=..... ���� ���� ���� �̾����Ƿ� ��� ����� ������ �ʴ´�. 
normal order evaluation : �츮�� �ַ� �����ϴ� ����� ���. ���ǹ��� Ȯ���ϰ� ���̸� ���� p(0)�� �����
���� �ʿ䰡 ���� ������ x=0�� ���� Ȯ�εǰ�, false�� ��쿡�� �׳� 0�� ��µ� ���̴�.*/