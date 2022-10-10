from itertools import combinations

l, c = map(int, input().split())
a = sorted(input().split())
comb = list(combinations(a, l))

for c in comb:
  cnt = 0 
  for i in c:
    if i in 'aeiou':
      cnt+=1
  
  if cnt >=1 and cnt <= l-2:
    print("".join(c))
