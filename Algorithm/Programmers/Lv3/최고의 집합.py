def solution(n, s):
    if n > s: return [-1]
    answer = [s//n for _ in range(n)]
    idx = len(answer)-1
    for i in range(s - sum(answer)):
        answer[idx] += 1
        idx -= 1
    return answer
