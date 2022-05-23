function solution(board)
{
    var x_len = board[0].length
    var y_len = board.length
    var answer = 0
    
    if(x_len < 2 || y_len <2 ) return 1
    
    for(var i=1;i<y_len;i++){
        for(var j=1;j<x_len;j++){
            if(board[i][j]>0){
                let min = Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j])
                board[i][j] = min+1
            } 
            if(answer < board[i][j]){
                answer = board[i][j]
            }
        }
    }
    return answer * answer
}
