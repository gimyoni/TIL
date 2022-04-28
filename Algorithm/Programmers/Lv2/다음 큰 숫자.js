function solution(n) {
    let arr = n.toString(2).split(''); // 2진법으로 변환해 배열 만들기
    let cnt = arr.filter((val)=>val==='1').length; // 1의 갯수 세기
    let cnt2;
    while(cnt!==cnt2){
        ++n; // n의 다음 큰 숫자
        cnt2 = n.toString(2).split('').filter((val)=>val==='1').length; // 1의 갯수 세기
    }
    return n;
}
