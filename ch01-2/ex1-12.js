function pascal(x,y){
    return x<=1||y<=1||y===x+1
            ?1
            :pascal(x-1,y-1)+pascal(x-1,y);
}

console.log(pascal(5,4));// 내 답안(1,1부터 시작하는 좌표)

function pascal_triangle(row, index) {
    return index > row
           ? false
           : index === 1 || index===row
             ? 1
             : pascal_triangle(row - 1, index - 1)
	       +
	       pascal_triangle(row - 1, index);
}

console.log(pascal_triangle(5, 4));//모범 답안(0,0부터 시작하는 좌표)