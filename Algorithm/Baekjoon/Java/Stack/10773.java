import java.util.*;

class Main {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<Integer>();
    Scanner scan = new Scanner(System.in);
		
    int K = scan.nextInt();
        
    for(int i = 0; i < K; i++) {
      int number = scan.nextInt();
        
      if(number == 0) {
        stack.pop();
      }
      else {
        stack.push(number);
      }
    }
    
    int sum = 0;
    for(int o : stack) {
      sum += o;
    }
    System.out.print(sum);
  }
}
