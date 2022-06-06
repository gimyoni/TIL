function solution(num) {
    
    function getCollatz(n, cnt){
        if(n==1) return cnt;
        if(cnt>=500) return -1;
        n%2==0 ? n=n/2 : n=n*3+1;
        cnt+=1;
        return getCollatz(n, cnt);
    }
    let result = getCollatz(num, 0);
    return result;
}
