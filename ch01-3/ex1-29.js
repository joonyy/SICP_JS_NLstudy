function cube(x) {
    return x * x * x;
}

function sum(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum(term, next(a), next, b);
}
function inc(k) {
    return k + 1;
}
function integral(f, a, b, dx) {
    function add_dx(x) {
        return x + dx;
    }
    return sum(f, a + dx / 2, add_dx, b) * dx;
}

console.log(integral(cube, 0, 1, 0.01));

function Simpson(f,a,b,n){
    function Simp_dx(h){
        function y(k){
            return f(a+k*h);
        }
        function term(k){
            return k===0 || k===n
                  ?y(k)
                  :k%2 ===0
                  ?2*y(k)
                  :4*y(k);
        }
        return sum(term,0,inc,n)*(h/3);
    }
    return Simp_dx((b-a)/n);
}
console.log(Simpson(cube,0,1,100));
console.log(Simpson(cube,0,1,1000));
