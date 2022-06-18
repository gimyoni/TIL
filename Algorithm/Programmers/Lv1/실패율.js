function solution(N, stages) {
    let answer = [];
    let fail_stage = [];
    let stage_cnt=stages.length;
    for(let i = 1; i<=N; i++){
        let chk = stages.filter(element => i === element).length;
        
        if(stage_cnt === 0){
            fail_stage.push(0);
        }else{
            fail_stage.push(chk/stage_cnt);
            stage_cnt-=chk;
        }
    }
    for(let i = 0; i<N; i++){
        let max = Math.max.apply(null, fail_stage);
        answer.push(fail_stage.indexOf(max)+1);
        fail_stage[fail_stage.indexOf(max)] = -1;  
    }
    
    return answer;
}
