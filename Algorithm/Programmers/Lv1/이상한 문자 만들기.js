function solution(s) {
    var answer = '';
    let str = s.split(' ');
    for(let i of str){
        for(let j = 0; j<i.length; j++){
            j%2==0 ? answer += i[j].toUpperCase() : answer += i[j].toLowerCase();
        }
        answer+=' ';
    }
    return answer.slice(0,-1);
}
