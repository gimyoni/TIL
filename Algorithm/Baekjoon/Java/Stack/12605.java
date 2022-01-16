import java.util.Scanner;

public class Main {
    public static void main(String[] args){
       Scanner scan = new Scanner(System.in);
       int num = scan.nextInt();
       scan.nextLine();
       for(int i=0;i<num;i++)
       {
    	   String input = scan.nextLine();
    	   String[] arr = input.split(" ");
    	   System.out.print("Case #"+(i+1)+": ");
    	   for(int j=arr.length-1;j>=0;j--)
    	   {
    		   System.out.print(arr[j]+" ");
    	   }
    	   System.out.println();
       }
    }
}
