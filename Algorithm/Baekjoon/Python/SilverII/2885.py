k = int(input())

n=1
while(True):
  n*=2 
  if k<=n:
    break
print(n, end=' ')

d=0
cnt = 0
while(k>0):
  if k>=n:
    k-=n
  else:
    d += n//2
    n //=2
    cnt+=1
print(cnt)
