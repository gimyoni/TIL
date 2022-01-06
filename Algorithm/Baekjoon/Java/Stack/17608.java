import java.util.*;

class Main {
  public static void main(String[] args) {
    Stack<Integer> stack = new Stack<Integer>();
    Scanner scan = new Scanner(System.in);
		
    int N = scan.nextInt();
        
    for(int i = 0; i < N; i++) {
      int number = scan.nextInt();
      stack.push(number);
    }
    
    int cnt = 1;
    int top = stack.pop();

    while(!stack.empty()) {
      if(stack.peek() > top) {
        cnt++;
        top = stack.pop();
      }else{
        stack.pop();
      }
    }

    System.out.print(cnt);
  }
}
