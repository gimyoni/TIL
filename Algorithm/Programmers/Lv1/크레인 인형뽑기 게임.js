function solution(board, moves) {
    var answer = 0;
    let cnt = 0;
    let basket = [];
    board = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
    let b = board.filter((x)=>{
       for(let i=0; i<board.length; i++){
           if(x[0]===0){
               x.shift();
           }
       }
        return x;
    });

    let doll;
    moves.forEach(function(m){
        if(b[m-1].length!==0){
            doll = b[m-1].shift();
            if(doll === basket[basket.length-1]){
                cnt+=2;
                basket.pop();
            }else{
                basket.push(doll);    
            }   
        }
    });
    return cnt;
}
