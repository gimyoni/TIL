import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        HashMap<String, String> map = new HashMap<>();
        
        for(String p : phone_book)
            map.put(p, p);
        
        for(String p : phone_book){
            for(int i = 0; i < p.length(); i++){
                if(map.containsKey(p.substring(0,i))){
                    return false;
                }
            }
        }
        
        return true;
    }
}
