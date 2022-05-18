function solution(s) {
    let delZero =0;
    let cnt =0;
    while(s.length>1){
        let originLen = s.length;
        s=s.split('').filter(v=>v==='1').join('');
        let len = s.length;
        delZero+=originLen-len;
        s=len.toString(2);
        cnt++;
    }
    return[cnt,delZero];
}
