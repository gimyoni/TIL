function solution(progresses, speeds) {
    let answer = [0];
    let days = [];
    progresses.forEach(function(val, idx){
        let remain = 100 - val;
        let chk = 0;
        while(remain>0){
            remain-=speeds[idx];   
            chk+=1;
        }
        days.push(chk);
    })
    console.log(days);
    let max_day = days[0];
    for(let i = 0, j= 0; i<days.length; i++){
        if(days[i]<=max_day){
            answer[j]+=1;
        }else{
            max_day = days[i];
            answer[++j] =1;

        }
    }
    return answer;
}
