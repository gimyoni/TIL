import java.util.*;

public class Main {
    public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String a = scan.next();
    String b = scan.next();
    int answer = a.length();

    for(int i=0; i<=b.length()-a.length(); i++) {
      int cnt = 0;
      
      for(int j=0; j<a.length(); j++) {
        if(a.charAt(j) != b.charAt(i+j)) cnt++;
            answer = Math.min(cnt, answer);
      }
    }  
      System.out.println(answer);
    }
}
