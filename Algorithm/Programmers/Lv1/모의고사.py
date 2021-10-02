def solution(answers):
    win = [] # 가장 문제를 많이 맞힌 사람
    a = [0,0,0] # 맞힌 문제 개수
    one = [1,2,3,4,5] # 1번 수포자
    two = [2,1,2,3,2,4,2,5] # 2번 수포자
    three = [3,3,1,1,2,2,4,4,5,5] # 3번 수포자
    
    for i in range(len(answers)): # 문제를 맞혔다면 더해주기
        if answers[i] == one[i%len(one)]: 
            a[0] +=1
        if answers[i] == two[i%len(two)]: 
            a[1] +=1
        if answers[i] == three[i%len(three)]: 
            a[2] +=1

    for i in range(3): # 가장 높은 점수인 사람 구하기
        if a[i] == max(a):
            win.append(i+1)
    
    return win
