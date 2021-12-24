import java.util.*;

class Solution {
    public int[] solution(int brown, int yellow) {
        List<Integer> list = new ArrayList<Integer>();
        
        if(yellow == 2) list.add(2);
        
        for(int i = 1; i<=Math.sqrt(yellow); i++){
            if(yellow%i==0)
                list.add(i);
        }
        
        int[] answer = new int[2];
        for(int i : list){
            if((yellow+((i+2)*2)+(yellow/i)*2)==(brown+yellow)){
                int w = i+2;
                int h = (yellow/i)+2;
                if(w>=h){
                    answer[0] = w;
                    answer[1] = h;
                }else{
                    answer[0] = h;
                    answer[1] = w;
                }
                break;
            }
        }
        return answer;
    }
}
