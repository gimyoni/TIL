from itertools import permutations

def solution(k, dungeons):
    answer = 0
    len_dun = len(dungeons)
    
    for per in permutations(dungeons, len_dun): 
        temp = k 
        cnt = 0 
        for p in per:
            if temp >= p[0]:
                temp -= p[1] 
                cnt += 1
        if cnt > answer: answer = cnt
        
    return answer
