function solution(s) {
    let nums = s.split(' ');
    let min = Math.min.apply(null, nums);
    let max = Math.max.apply(null, nums);
    return min+' '+max;
}
