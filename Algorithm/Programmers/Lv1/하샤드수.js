function solution(x) {
    let nums = String(x).split('').map(Number);
    let result = nums.reduce((sum, current) => sum + current, 0);
    return x%result==0 ? true : false;
}
