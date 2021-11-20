N = int(input())
m=[list(map(int,input().split())) for _ in range(N)]

for i in range(1, N):
  m[i][0] = min(m[i-1][1], m[i-1][2]) + m[i][0]
  m[i][1] = min(m[i-1][0], m[i-1][2]) + m[i][1]
  m[i][2] = min(m[i-1][0], m[i-1][1]) + m[i][2]

print(min(m[N-1]))
