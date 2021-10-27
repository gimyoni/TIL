n,k = map(int,input().split())
coin_list = []
for i in range(n):
  coin_list.append(int(input()))
coin_list.sort(reverse=True)
count = 0
for coin in coin_list:
  count += k//coin
  k%=coin
  
print(count)
