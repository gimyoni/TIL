function solution(n) {
    let cnt =0;
    let sum = 0;
    for(let i =1; i<n; i++){
        sum +=i;
        for(let j = i+1; j<n; j++){
            sum+=j;
            if(sum===n){
                sum = 0;
                cnt++;
                break;
            }else if(sum>n){
                sum = 0; 
                break;
            }   
        }
    }
    return cnt+1;
}
