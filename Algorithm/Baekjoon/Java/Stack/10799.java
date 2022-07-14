import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		String s = scan.next();
		int result = 0;
		Stack<Integer> stack = new Stack<>();
		
		for(int i = 0; i < s.length(); i++) {
			if(s.charAt(i) == '(')
				stack.push(i);
			else {
				if(stack.pop() == i-1) 
					result+=stack.size();
				else 
					result++;
			}
		}
		System.out.println(result);
		scan.close();
	}
}
