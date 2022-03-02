function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}
console.log(test(0,p(0)));
/*무한루프에 빠짐. p()값이 p()를 return 하므로, 끝이 없는 루프에 빠지게 되는 것이다.
applicative order evaluation : 이 방식은 계산 전에 모든 경우를 다 계산하게 된다. 그러므로 
return x===0?0:p();=> return ( true ?0 :p()); 
p()= p()=p()=..... 으로 끝도 없이 이어지므로 계산 결과가 나오지 않는다. 
normal order evaluation : 우리가 주로 생각하는 방식의 계산. 조건문을 확인하고 참이면 뒤의 p(0)를 계산을
해줄 필요가 없기 때문에 x=0이 먼저 확인되고, false일 경우에는 그냥 0이 출력될 것이다.*/