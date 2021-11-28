class Solution {
    public boolean solution(int x) {
        String[] num = String.valueOf(x).split("");

    int sum = 0;
    for (String n : num) {
        sum += Integer.parseInt(n);
    }

    return (x % sum == 0) ? true : false;
    
    }
}
