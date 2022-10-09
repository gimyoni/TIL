t = int(input().strip())

for _ in range(t):
    n = int(input().strip())
    l = list(map(int, input().split()))
    l.sort()
  
    lv = 0
    for i in range(2, n):
        lv = max(lv, abs(l[i] - l[i-2])) 
    print(lv)
