class Solution {
    public int solution(int n) {
        int cnt = 0;
        int sum = 0;
        
        for(int i = 1; i<=n; i++){
            sum = 0;
            for(int j = i; j<=n; j++){
                sum += i;
                if(sum == n) {
                    cnt++;
                    j = n+1;
                }
            }
        }
        return cnt;
    }
}
