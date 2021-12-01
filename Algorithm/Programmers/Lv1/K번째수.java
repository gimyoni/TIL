import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
                
        int[] answer = new int[commands.length];

        int cnt = 0;
        for(int[] c : commands){
             ArrayList<Integer> list = new ArrayList<>();
             for(int i = c[0]-1; i<c[1]; i++){
                 list.add(array[i]);
             }
            Collections.sort(list);
            answer[cnt++] = list.get(c[2]-1);
        }
        
        return answer;
    }
}
