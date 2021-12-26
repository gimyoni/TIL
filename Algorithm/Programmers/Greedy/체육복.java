class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] student = new int[n];
        
        for(int i = 0; i<lost.length; i++){
            student[lost[i]-1] = -1;
        }
        
        for(int i = 0; i<reserve.length; i++){
            if(student[reserve[i]-1] == -1){
                student[reserve[i]-1] = 0;
            }else{
                student[reserve[i]-1] = 1;                
            }
        }
        
        for(int i = 0; i<n; i++){
            if(i == 0){
                if(student[i] < 0 && student[i+1] > 0 ){
                    student[i] = 0;
                    student[i+1] = 0;
                }
            }
            else if(i == n-1){
                if(student[i] < 0 && student[i-1] > 0 ){
                    student[i] = 0;
                    student[i-1] = 0;
                }
            }
            else{
                if(student[i] == -1){
                    if(student[i-1] > 0){
                        student[i] = 0;
                        student[i-1] = 0;
                    }else if(student[i+1] > 0){
                        student[i] = 0;
                        student[i+1] = 0;
                    }
                }
            }
        }
        
        int answer = 0;        
        for(int i = 0; i<student.length; i++){
            if(student[i] >= 0){
                answer += 1;
            }
        }
        
        return answer;
    }
}
