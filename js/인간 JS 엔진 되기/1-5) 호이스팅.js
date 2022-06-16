```javascript
var y;
cosnt x = 'x1';
console.log(z);
y = 'hehe'; // var 는 코드를 분석할 때 매우 헷갈리게 하며 직관적이지 않다
const z = () => {};
function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}
function a() {
  console.log('a');
  b();
  const x = 'x2'; // TDZ temporal dead zone
  // const x = 'x'; 이런 것은 안하면 됨. 선언들은 가장 위에다 씀
}

a(); // a, b, c
c(); // c
```
선언들은 가장 위에다 씀, 호이스팅을 해야할 상황을 만들지 않는 것이 최선
원치 않게 호이스팅이 적용된다? -> eslint를 적용(호이스팅 쓰지 않기 룰추가)

var와 함수를 위로 올리면 됨.
