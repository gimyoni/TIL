import java.util.*;

class Solution {
    public long solution(long n) {
	    String s = String.valueOf(n); 
        String strnum = "";
        Long answer;
        char [] arr = new char[s.length()];
        for(int i=0; i<s.length(); i++){
            arr[i] +=s.charAt(i);
        }
        Arrays.sort(arr);
        for(int i = arr.length-1; i>=0; i--){
            strnum+=arr[i];
        }
        answer = Long.parseLong(strnum);

        return answer;
    }
}
