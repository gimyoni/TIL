i = 1 # 케이스 수를 카운트할 i
while True: 
  l, p, v = map(int,input().split())
  if l == 0 and p == 0 and v == 0: # l, p, v가 0 일때 종료
    break
  a = v//p*l # 휴가일 중에서 캠핑장을 연속하는 날을 나누어 총 몇 일을 사용할 수 있는지 구함
  b = v%p # 남은 날짜 중에서 캠핑장을 사용할 수 있는 날을 구함
  if l < b: # 남은 날이 사용 기간보다 크다면
    b = l # 사용할 수 있는 날 l 값을 저장
  print("Case "+str(i)+": "+str(a+b))
  i+=1 # 횟수 더하기
