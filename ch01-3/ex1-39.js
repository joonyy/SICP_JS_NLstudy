function cont_frac_rec(n, d, k){
    function helper(i){
        return i<k//i가 k보다 작으면
              ?n(i) / (d(i) + helper(i+1))//continued fraction 진행
              :0//아니면 0.
    }
    return helper(1);//i는 1부터 시작하기 때문
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