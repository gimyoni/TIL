import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      String a = sc.next();
      String b = sc.next();

      int len = a.length();

      for(int i=0;i<b.length()-a.length()+1;i++){
            int tmp=0;

            for(int j=0;j<a.length();j++){
                if(a.charAt(j)!=b.charAt(j+i)){
                    tmp++;
                }
            }
            len = Math.min(tmp, len);
        }

        System.out.println(len);
  }
}
