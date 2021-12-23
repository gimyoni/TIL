import java.util.*;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        
        Queue<Integer> wait = new LinkedList<>();
        Queue<Integer> bridge = new LinkedList<>();
        
        for(int t : truck_weights) wait.add(t);
        for(int i = 0; i<bridge_length; i++) bridge.add(0);

        int time = 0;

        while(!wait.isEmpty()){
            time++;
            bridge.poll();
            if(sumWeight(bridge)+wait.peek()<=weight){
                bridge.add(wait.poll());                
            }else{
                bridge.add(0);
            }
        }
          
        int cnt=0;
        for(int b : bridge) if(b>0) cnt++;
 
        int answer = time + (bridge_length-cnt) + cnt;
        
        return answer;
    }
    
    public int sumWeight(Queue<Integer> queue){
        int sum = 0;
        for(int q : queue){
            sum+=q;
        }
        return sum;
    }
}
