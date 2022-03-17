function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
  //캐시 크기가 0인 경우는 따로 처리
  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
      // cities의 도시이름 소문자로
    const city = cities.shift().toLowerCase();
    if (cache.includes(city)) { // cache에 city가 포함되어 있다면 
      cache.splice(cache.indexOf(city), 1); // city 꺼내서
      cache.push(city); // 다시 push
      answer += 1; // cache hit => 실행시간 1더함
    } else {
      if (cache.length === cacheSize) { // 캐시가 꽉 찼다면
        cache.shift(); // 맨 앞의 city 제거
      }
      cache.push(city); // city push
      answer += 5; //cache miss => 실행시간 5 더함
    }
  }
  return answer;
}
