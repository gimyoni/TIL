function solution(people, limit) {
    people = people.sort((a,b)=>b-a);
    let new_p = people.filter((val)=>limit-val>=40);
    let cnt = people.length-new_p.length;
    while(new_p.length!==0){
        if(new_p[0]+new_p[new_p.length-1]<=limit){
            new_p.pop();
        }
        new_p.shift();
        cnt++;

    }
    return cnt;
}
