import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        int len = board.length;
        int[][] _board = new int[len][len];
        
        for(int i = 0; i<len; i++){
            for(int j = 0; j<len; j++){
                _board[i][j] = board[j][i];
            }
        }

        
        Stack<Integer> basket = new Stack<Integer>();
        for(int m : moves){
            for(int i = 0; i<len; i++){
                if(_board[m-1][i] != 0){
                    if(!basket.isEmpty() && (basket.peek()==_board[m-1][i])){
                        basket.pop();
                        answer+=2;
                    }else{
                        basket.push(_board[m-1][i]);                        
                    }                
                    _board[m-1][i] = 0;
                    break;
                }
            }
        }
        
        
        return answer;
    }
}
