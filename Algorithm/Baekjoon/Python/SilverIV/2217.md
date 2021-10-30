N = int(input())
rope = []
for _ in range(N):
  rope.append(int(input()))
rope.sort(reverse = True)
arr = []
for num in range(N):
  arr.append(rope[num]*(num+1))
print(max(arr))
