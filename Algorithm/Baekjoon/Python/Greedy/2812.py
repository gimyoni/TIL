import sys
input = sys.stdin.readline

N, K = map(int, input().split())
num = list(input())

stack = []
delK = K

for i in range(N):
    while delK > 0 and stack and stack[-1] < num[i]:
        stack.pop()
        delK -= 1
    stack.append(num[i])

print(''.join(stack[:N-K]))
