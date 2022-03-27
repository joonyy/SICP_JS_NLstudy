function cont_frac_rec(n, d, k){
    function helper(i){
        return i<k//i�� k���� ������
              ?n(i) / (d(i) + helper(i+1))//continued fraction ����
              :0//�ƴϸ� 0.
    }
    return helper(1);//i�� 1���� �����ϱ� ����
}

function Eulor(i){
    return i%3===2
          ?2*((i+1)/3)
          :1
}

console.log(2+cont_frac_rec(i=>1,Eulor,20));
