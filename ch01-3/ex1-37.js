//1. 최소 12까지는 넣어줘야 한다.
function cont_frac_rec(n, d, k){
    function helper(i){
        return i<k//i가 k보다 작으면
              ?n(i) / (d(i) + helper(i+1))//continued fraction 진행
              :0//아니면 0.
    }
    return helper(1);//i는 1부터 시작하기 때문
}

console.log(cont_frac_rec(i=>1,i=>1,12));

//2.
function cont_frac_iter(n, d, k){
    function helper(i,count){
        return i===0
              ?count
              :helper(i-1,n(i)/(d(i)+count));
    }
    return helper(k,0);//k에서 시작하여 0으로 간다.
}

console.log(cont_frac_iter(i=>1,i=>1,11));
