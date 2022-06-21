function solution(s)
{
    let answer = 0;
    for(let i=s.length; i>=1; i--){
        for(let j = 0; j<=s.length-i; j++){
           if(isPalin(s.substring(j, j+i))) return i
        }
    }
    return answer;
}
const isPalin = (s) => {
    let len = parseInt(s.length/2);
    for(let i = 0; i<len; i++){
        if(s[i] !== s[s.length-i-1]) return false;
    }
    return true;
}
