import java.util.*;

public class Main {
    public static void main(String[] args){
      Scanner scan = new Scanner(System.in);
      int K = scan.nextInt();

      int a = 0;
      int b = 1;

      for(int i = 1; i<K; i++){
        int temp = a + b;
        a = b;
        b = temp; 
      }

      System.out.print(a +" "+b);
      scan.close();
    }
}
