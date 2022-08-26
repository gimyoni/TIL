function solution(n){
    return String(n).split('').map(Number).reduce((sum, current) => sum + current, 0);
}
