import java.util.*;

class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    while(true){
      String str = scan.nextLine();
      if(str.equals(".")) break;
      Stack<String> stack = new Stack<>();

      for(String s : str.split("")){
        if(s.equals("(") || s.equals("[")) stack.push(s);
        else if(s.equals(")") && !stack.isEmpty() && stack.peek().equals("(")) stack.pop();
        else if(s.equals("]") && !stack.isEmpty() && stack.peek().equals("[")) stack.pop();
        else if(s.equals(")") || s.equals("]")) stack.push(s);
      }

      if(stack.empty()){
          System.out.println("yes");
      }else{
          System.out.println("no");
      }
    }
  }
}
