function solution(str1, str2) {
  var answer = 1

  str1 = str1.toUpperCase()
  str2 = str2.toUpperCase()
  
  // 첫번째 글자 영문자 넣을 배열
  var arr1 = []
  // 두번째 글자 영문자 넣을 배열
  var arr2 = []

  // 두글자씩 짜르는데 영문자 아닌 것이 있으면 넘어간다.
  for (var i = 0; i < str1.length - 1; i++) {
    var tmp = str1.slice(i, i + 2)
    if (tmp.search(/[^A-Z]/g) >= 0) {
      continue
    }
    arr1.push(tmp)
  }
  for (var i = 0; i < str2.length - 1; i++) {
    var tmp = str2.slice(i, i + 2)
    if (tmp.search(/[^A-Z]/g) >= 0) {
      continue
    }
    arr2.push(tmp)
  }
  
    // 정렬
  arr1.sort()
  arr2.sort()

  var a = [] // 교집합 배열
  var b = [] // 합집합 배열
  
  // 교집합
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      a.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
    }
    b.push(arr2[i])
  }

    // 합집합
  for (var i = 0; i < arr1.length; i++) {
    b.push(arr1[i])
  }
    
  // 이렇게 분모가 0이 될경우, 분자가 0이될 경우 따로 분리
  if (b.length === 0) return 65536
  if (a.length === 0) return 0

  return Math.floor((a.length / b.length) * 65536)
}
