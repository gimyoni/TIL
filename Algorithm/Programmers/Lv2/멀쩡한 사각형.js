function solution(w, h) {
    return (w*h)-(w+h-gcd(w,h));
}
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
