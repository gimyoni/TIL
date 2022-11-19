def solution(s):
    stack = []
    for i in s:
        if i == '(':
            stack.append(i)
        elif len(stack) and i == ')':
            stack.pop()
        else:
            return False
    return stack == []
