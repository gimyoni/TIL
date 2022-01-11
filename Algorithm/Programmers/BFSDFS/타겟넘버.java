class Solution {
    static int answer;
    public void recur(int[] numbers, int target, int cnt, int sum){
        if(cnt == numbers.length){
            if(sum == target) answer++;
            return;
        }
        
        recur(numbers, target, cnt+1, sum+numbers[cnt]);
        recur(numbers, target, cnt+1, sum-numbers[cnt]);
        
    }
    public int solution(int[] numbers, int target) {
        answer = 0;
        recur(numbers, target, 0, 0);
        return answer;
    }
}
