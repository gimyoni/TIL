function solution(brown, yellow) {
    let answer = [];
    let divisor = [];
    let size = brown+yellow;

    for(let i =1; i*i<= yellow; i++){
        if(yellow%i==0){
            divisor.push([i,yellow/i]);
        }
    }    
    divisor.forEach(function(arr){
        console.log(arr);
        let width = arr[1]+2;
        let height = arr[0]+2;

        if(width*height === size){
            answer.push(width, height);
            return;
        }
        
    })
    return answer;
}
