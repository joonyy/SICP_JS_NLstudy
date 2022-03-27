//1. �ּ� 12������ �־���� �Ѵ�.
function cont_frac_rec(n, d, k){
    function helper(i){
        return i<k//i�� k���� ������
              ?n(i) / (d(i) + helper(i+1))//continued fraction ����
              :0//�ƴϸ� 0.
    }
    return helper(1);//i�� 1���� �����ϱ� ����
}

console.log(cont_frac_rec(i=>1,i=>1,12));

//2.
function cont_frac_iter(n, d, k){
    function helper(i,count){
        return i===0
              ?count
              :helper(i-1,n(i)/(d(i)+count));
    }
    return helper(k,0);//k���� �����Ͽ� 0���� ����.
}

console.log(cont_frac_iter(i=>1,i=>1,11));
