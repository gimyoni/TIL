function solution(s) {
    let answer = s;
    const cut_len = s.length / 2; 
    const str_len = s.length; 
    
    for (let i = 1; i <= cut_len; i++)
    {
        let temp_str = ""; 
        let cut_str = s.slice(0, i); 
        let count = 1; 
        
        for (let j = i; j < str_len; j += i)
        {
            const str = s.slice(j, j+i);
            if (cut_str == str) 
            {
                count++;
            }
            else
            {
                temp_str += (count > 1 ? count + cut_str : cut_str); 
                cut_str = str; 
                count = 1; 
            }
        }
        
        if (cut_str) 
        {
            temp_str += (count > 1 ? count + cut_str : cut_str);
        }
    
        if (answer.length > temp_str.length)
        {
            answer = temp_str;
        }
    }
    return answer.length;
}
