function solution(n, s) {
  if(n>s) return [-1];
  
  let r = s % n;
  let answer = new Array(n).fill( s / n >> 0);
  
  for(let i = 0; i < r; i ++)
    answer[answer.length - 1 - i]++;
  
  return answer;
}
