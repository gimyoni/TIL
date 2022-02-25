import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int N = sc.nextInt();
      
      System.out.println(recur(N, 0));
  }
  public static int recur(int N, int cnt){
    if(N < 2) return cnt;

    return Math.min(recur(N/2, cnt+1+(N%2)), recur(N/3, cnt + 1+(N%3)));
  }
}
