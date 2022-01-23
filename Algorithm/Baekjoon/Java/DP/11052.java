import java.util.*;

public class Main {
    public static void main(String[] args){
      Scanner scan = new Scanner(System.in);
      int N = scan.nextInt();
      int[] arr = new int[N + 1];
      int[] d = new int[N + 1];

      for (int i = 1; i <= N; i++)
        arr[i] = scan.nextInt();

      for (int i = 1; i <= N; i++) {
        for (int j = 1; j <= i; j++) {
          d[i] = Math.max(d[i], d[i - j] + arr[j]);
          }
      }

      System.out.println(d[N]);

      scan.close();
    }
}
