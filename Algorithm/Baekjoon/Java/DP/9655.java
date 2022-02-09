import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean[] dp = new boolean[1001];

        dp[1] = true;
        dp[2] = false;

        for(int i=3; i<=n; i++) dp[i] = dp[i-2];

        System.out.print(dp[n]? "SK" : "CY");

  }
}
