import java.io.*;
import java.util.*;

public class Main {

  static int[][] map; 
  static boolean[] visited; 
  static int n; 
  static int m; 
  static int start; 
  
  public static void main(String[] args) throws IOException {
  Scanner sc = new Scanner(System.in);
  n = sc.nextInt();
  m = sc.nextInt();
  start = sc.nextInt();
  
  map = new int[n+1][n+1]; 
  visited = new boolean[n+1];
  
  for(int i = 0; i < m; i++) {
    int x = sc.nextInt();
    int y = sc.nextInt();
    
    map[x][y] = map[y][x] = 1;
  }
  
  dfs(start);
  
  visited = new boolean[n+1]; 
  System.out.println();
  
  bfs();
  }
  
  public static void dfs(int i) {
    visited[i] = true;
    System.out.print(i + " ");
    
    for(int j = 1; j <= n; j++) {
      if(map[i][j] == 1 && visited[j] == false) {
        dfs(j);
      }
    }
  }
  
  public static void bfs() {
    Queue<Integer> queue = new LinkedList<Integer>();
    queue.offer(start);
    visited[start] = true;
    System.out.print(start + " ");
    
    while(!queue.isEmpty()) {
      int temp = queue.poll();
      
      for(int j = 1; j <= n; j++) {
        if(map[temp][j] == 1 && visited[j] == false) {
          queue.offer(j);
          visited[j] = true;
          System.out.print(j + " ");
        }
      }
    }
  }
}
