bracket = input()
stack = []
tmp = 1
result = 0

for i in range(len(bracket)):
    b = bracket[i]   
    if b == '(':
        tmp *= 2
        stack.append(b)
    elif b == '[':
        tmp *= 3
        stack.append(b)
    elif b == ')':
        if not stack or stack[-1] == '[':
            result = 0
            break
        if bracket[i-1] == '(':
            result += tmp
        tmp //= 2
        stack.pop()  
    else:
        if not stack or stack[-1] == '(':
            result = 0
            break
        if bracket[i-1] == '[':
            result += tmp
        tmp //= 3
        stack.pop() 

if stack:
    result = 0
print(result)
