function solution(s) {
    let answer = [];
    let s_list = s.split(' ');
    s_list.forEach(function(val){
        answer.push(val.slice(0,1).toUpperCase()+val.slice(1).toLowerCase());
    })
    return answer.join(' ');
}
