import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();

      System.out.println(fivo(n));
    }
    public static int fivo(int n){
      if(n <= 1)
        return n;
      else
        return fivo(n-1)+fivo(n-2);
    }
}
