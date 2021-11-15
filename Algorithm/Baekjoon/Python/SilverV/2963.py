t = int(input())
for i in range(t):
  answer = list(map(int, input().split()))
  answer.sort(reverse=True)
  print(answer[2])
