function solution(answers) {
    let p1 = [1,2,3,4,5];
    let p2 = [2,1,2,3,2,4,2,5];
    let p3 = [3,3,1,1,2,2,4,4,5,5];
    
    function getScore(pN){
        let score = 0;
        for(let i = 0; i<answers.length; i++){
            if(answers[i] === pN[i%pN.length]){
                score+=1;
            }
        }    
        return score;
    }
    
    let scores = [p1, p2, p3].map(getScore);
 
    let result = [];
    let max = Math.max.apply(null,scores);
    for(let i =1; i<=3; i++){
        if(max == scores[i-1]){
            result.push(i);
        }   
    }

    return result;
}
