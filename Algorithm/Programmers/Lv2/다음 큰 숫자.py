def solution(n):
    a = bin(n)[2:].count("1")
    while True:
        n += 1
        if a == bin(n)[2:].count("1"):
            return n
