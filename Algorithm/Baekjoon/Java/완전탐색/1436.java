import java.util.Scanner;
 
public class Main {
	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		int N = in.nextInt();
 
		int num = 666;
		int cnt = 1;
        
		while(cnt != N) { // cnt와 n이 같다면 n번째 영화 제목은 num
			num++; // N-1에 666을 붙이는 게 정답이 아님
			if(String.valueOf(num).contains("666")) {
				cnt++;
			}
		}
		System.out.println(num);
	}
}
