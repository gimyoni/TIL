n = int(input())
m = int(input())

graph = [[]*n for _ in range(n+1)]
for _ in range(m):
    x, y = map(int,input().split())
    graph[x].append(y)
    graph[y].append(x)
    
visited = [0]*(n+1)

cnt = 0
def dfs(v):
  global cnt
  visited[v] = 1
  for i in graph[v]:
    if visited[i]==0:
      dfs(i)
      cnt+=1
 
dfs(1)
print(cnt)
