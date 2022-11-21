n = int(input())
cnt = 0
nth = 666
while True:
    if '666' in str(nth): 
      cnt += 1
    if cnt == n:
      print(nth)
      break
    nth += 1
