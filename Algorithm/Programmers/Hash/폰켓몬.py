def solution(nums):
    answer = 0
    
    n_len = len(set(nums))    
    l = len(nums)//2
    
    if l < n_len:
        answer = l
    else:
        answer = n_len
            
    return answer
