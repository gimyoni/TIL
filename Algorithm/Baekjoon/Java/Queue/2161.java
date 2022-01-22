import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException{
      Scanner scan = new Scanner(System.in);
      int N = scan.nextInt();
      Queue<Integer> queue = new LinkedList<>();
      for(int i = 1; i<=N; i++) queue.add(i);

      String a = "";
      while(queue.size()!=1){
        a+=queue.poll().toString()+" ";
        queue.add(queue.poll());
      }
      System.out.println(a + queue.poll());
    }
}
