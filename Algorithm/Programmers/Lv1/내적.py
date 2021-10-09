def solution(a, b):
    n = []
    for i in range(len(a)):
        n.append(a[i]*b[i])
    return sum(n)
