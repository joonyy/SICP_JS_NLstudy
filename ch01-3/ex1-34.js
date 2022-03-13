function square(n){
    return n*n;
}
function f(g) {
    return g(2);
 }
 console.log(f(square)); 
 console.log(f(z => z * (z + 1)));

 /*
 f(f)를 입력한다면,
 f(2)를 반환할 것이고,
 f(2)는 2(2)를 반환할 것이다.
 2(2)는 함수가 아니므로, 에러가 날 것이다. 
 */
console.log(f(f));