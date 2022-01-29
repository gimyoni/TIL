import java.util.*;

public class Main {

  private static int N; 
  private static int M;
  private static int[] map = new int[100001];

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    N = scan.nextInt();
    M = scan.nextInt();
    bfs();
    System.out.println(map[M]);
  }

  static void bfs() {
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(N);
    while (!queue.isEmpty()) {
      N = queue.poll();
      if (N == M) break;
            
      if (N - 1 >= 0 && map[N - 1] == 0) {
        queue.offer(N - 1);
        map[N - 1] = map[N] + 1;
      }
      if (N + 1 <= 100000 && map[N + 1] == 0) {
        queue.offer(N + 1);
        map[N + 1] = map[N] + 1;
      }
      if (N * 2 <= 100000 && map[N * 2] == 0) {
        queue.offer(N * 2);
        map[N * 2] = map[N] + 1;
      }
    }
  }
}
