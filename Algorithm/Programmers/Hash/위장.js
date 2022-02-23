function solution(clothes) {
    let new_c  = {};
    for(let c of clothes){
        if(new_c[c[1]]){
            new_c[c[1]]+=1;
        }else{
            new_c[c[1]] = 1;
        }
    }
    console.log(new_c);
    let answer = 1;
    for(let c in new_c){
        answer *= new_c[c]+1;
    }
    return answer-1;
}
