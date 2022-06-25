function solution(n, t, m, p) {
    let nums = '';
    for(let i = 0; i<t*m; i++){  
        nums += i.toString(n);   
    }
    nums = nums.toUpperCase(); 

    let answer = ''; 
    for(let j=0; j<t*m; j++){ /
        if(j%m===p-1){ 
            answer+=nums[j]; 
        }
    }
    return answer;
}
