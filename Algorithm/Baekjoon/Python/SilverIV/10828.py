import sys

def push(x):
  stack.append(x)

def pop():
  if(not stack):
    return -1
  else:
    return stack.pop()

def size():
  return len(stack)

def empty():
  return 0 if stack else 1

def top():
  return stack[-1] if stack else -1

N = int(sys.stdin.readline().rstrip())
stack = []

for _ in range(N):
  i = sys.stdin.readline().rstrip().split()
  j = i[0]
  if j=="push":
    push(i[1])
  elif j== "pop":
    print(pop())
  elif j == "size":
    print(size())
  elif j == "empty":
    print(empty())
  elif j == "top":
    print(top())
