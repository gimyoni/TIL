import java.util.*;

class Solution {
    public String solution(String s) {
      String answer[] = s.split(" ");
      int[] str = new int[answer.length];
      for(int j=0;j<answer.length;j++){
        str[j]=Integer.parseInt(answer[j]);
      }

     Arrays.sort(str);

     return str[0]+" "+str[str.length-1];
    }
}
