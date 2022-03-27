function cont_frac_rec(n, d, k){
    function helper(i){
        return i<k//i�� k���� ������
              ?n(i) / (d(i) + helper(i+1))//continued fraction ����
              :0//�ƴϸ� 0.
    }
    return helper(1);//i�� 1���� �����ϱ� ����
}
function sqrt(x){
    return x*x;
}

function second(i){
    return 2*i-1;
}
function tan_cf(x,k){
    function first(i){
        return i===1
              ?x
              :-sqrt(x);
    }
    return cont_frac_rec(first,second,k);
}

console.log(tan_cf(3.14159265,14));