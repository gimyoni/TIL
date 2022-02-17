function solution(array, commands) {
    var answer = [];
    var c = [];
    for(let command of commands){
        let i = command[0];
        let j = command[1];
        let k = command[2];
        for(let l = i; l<=j; l++){
            c.push(array[l-1]);
        }
        c.sort( (a, b) => a - b );
        answer.push(c[k-1]);
        c = [];
    }
    return answer;
}
