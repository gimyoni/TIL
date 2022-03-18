function solution(s) {
    let strList = s.replace("{{","").replace("}}","").split("},{"); // s를 배열로 만들어서 저장

    let numList = []; // ','를 기준으로 나누고 숫자로 변환
    for (let i = 0; i < strList.length; i++) {
        numList.push(strList[i].split(",").map(Number));
    }
    numList.sort((a,b)=>{ // 길이 오름차순
         return a.length-b.length;
    })

    let numSet = new Set(); // 튜플 담을 set 생성
    numList.forEach(function(val){ // 배열을 하나씩 가져오기
        for(let i of val){ // 숫자를 하나씩 꺼내서 
            numSet.add(i); // set에 저장하기 (중복 x)
        }
    })

    return [...numSet]; // set을 배열로 변환해서 return
}
