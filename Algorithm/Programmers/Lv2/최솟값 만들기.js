function solution(A,B){
    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>b-a);
    return A.reduce((sum, current, idx) => sum + current*B[idx], 0);
}
