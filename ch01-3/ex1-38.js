function cont_frac_rec(n, d, k){
    function helper(i){
        return i<k//i가 k보다 작으면
              ?n(i) / (d(i) + helper(i+1))//continued fraction 진행
              :0//아니면 0.
    }
    return helper(1);//i는 1부터 시작하기 때문
}

function Eulor(i){
    return i%3===2
          ?2*((i+1)/3)
          :1
}

console.log(2+cont_frac_rec(i=>1,Eulor,20));
