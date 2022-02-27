function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b-a);
    let chk = 0;
    for(let i = 0; i<citations.length; i++){
        if(citations[i]>=i+1){
            ++chk;
        }
    }
    return chk;
}
