function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let num = n.toString(k).split("0").filter(e=>e); 
  for (let i = 0; i < num.length; i++) {
    if (isPrime(Number(num[i]))) answer++; 
  }
  return answer;
}J
