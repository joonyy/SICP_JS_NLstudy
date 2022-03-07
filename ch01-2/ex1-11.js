function f_recursive(n){
    return n<3
            ?n
            :f_recursive(n-1)+2*f_recursive(n-2)+3*f_recursive(n-3);
}

console.log(f_recursive(5));

function f_iter(n){
    return n<3
    ?n
    :f_iter_process(2,1,0,n-2)
}
function f_iter_process(i,j,k,cnt){
    return cnt === 0
         ? i
         :f_iter_process(i+2*j+3*k,i,j,cnt-1);
}
console.log(f_iter(5));
