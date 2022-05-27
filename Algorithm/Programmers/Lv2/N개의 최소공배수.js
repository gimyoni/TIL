function solution(arr) {
    let result = arr[0];
    for(let i=1; i<arr.length; i++){
        result = lcm(result, arr[i]);
    }
    return result;
}
// 최대공약수
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}
