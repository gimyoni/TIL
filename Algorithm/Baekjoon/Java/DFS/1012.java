import java.io.*;
import java.util.*;

public class Main {
  static int n, m, k;
  static int[] dx = {-1, 1, 0, 0};
  static int[] dy = {0, 0, -1, 1};

  static int[][] maze;
  static boolean[][] checked;
  
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    
    for(int tc = 1; tc<=t; tc++){
      n = sc.nextInt();
      m = sc.nextInt();
      k = sc.nextInt();

      maze = new int[n][m];
      checked = new boolean[n][m];

      for(int j = 0; j<k; j++){
        maze[sc.nextInt()][sc.nextInt()] = 1;
      }

      int cnt = 0;
      for(int j = 0; j<n; j++){
        for(int l = 0; l<m; l++){
          if(maze[j][l] == 1 && !checked[j][l]){
            dfs(j,l);
            cnt++;
          }
        }
      }
      System.out.println(cnt);
    }
  }
  
  public static void dfs(int x, int y) {
    checked[x][y] = true;
            
    for(int i = 0; i<4; i++){
        int temp_x = x + dx[i];
        int temp_y = y + dy[i];

        if(temp_x>=0 && temp_y >= 0 && temp_x < n && temp_y< m){
          if(maze[temp_x][temp_y]==1 && !checked[temp_x][temp_y]){
            dfs(temp_x, temp_y);
          }
        }
    }
  }
} 
