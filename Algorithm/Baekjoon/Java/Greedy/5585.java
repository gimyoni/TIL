import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      int[] arr = {500,100,50,10,5,1};
      n = 1000-n;
      int cnt = 0;
      for(int i = 0; i<6; i++){
        cnt += n/arr[i];
        n = n%arr[i];
      }
      System.out.println(cnt);
    }
}
