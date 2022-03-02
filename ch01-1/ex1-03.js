function f(a,b,c){
    return (a>b?(b>c?(a*a+b*b):(a*a+c*c)):(a>c?(a*a+b*b):(b*b+c*c)));
}
res = f(4,7,2);
console.log(res);