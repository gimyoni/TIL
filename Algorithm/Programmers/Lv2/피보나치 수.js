function solution(num) {
  var fibo = [0, 1];   // 0, 1, 1, 2, 3

  for(var i = 2; i <= num; i++){
        fibo[i] = (fibo[i-1] + fibo[i-2]);
  }

    return fibo[num];
}
