import java.util.Scanner;

class Main {
  public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); 
        int k = scan.nextInt();

        int n = 1;
        while(true){
          n *= 2;
          if(k<=n) break;
        }
        System.out.print(n+" ");
        int d = 0;
        int cnt = 0;
        while(k>0){
          if(k>=n){
            k-=n;
          }else{
            n /= 2;
            cnt++;
          }
        }
        System.out.println(cnt);
  }
}
