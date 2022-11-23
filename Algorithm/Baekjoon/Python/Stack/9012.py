T = int(input())

for _ in range(T):
    str = input()
    stack = []
    for s in str:
        if s == '(':
            stack.append(s)
        else:
            if stack:
                stack.pop()
            else:
                print('NO')
                break
    else: # for-else 문
        if not stack:
            print('YES')
        else:
            print('NO')
