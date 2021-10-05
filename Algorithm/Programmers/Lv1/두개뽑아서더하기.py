import collections
def solution(numbers):
    answer = []
    
    for n1 in numbers:
        for n2 in numbers:
            if n1 != n2:
                answer.append(n1+n2)
    
    numbers = Qcollections.Counter(numbers)
    print("collection ",end=' ') 
    print(numbers)
    for key, value in numbers.items():
        if value>=2:
            answer.append(key*2)
    a = set(answer)
    answer = list(a) 
    answer.sort()
    return answer
