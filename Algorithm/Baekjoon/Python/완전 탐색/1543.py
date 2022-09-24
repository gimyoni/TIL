doc = input()
w = input()
cnt = 0

while True:
  idx = doc.find(w)
  if idx == -1: break
  cnt += 1
  doc = doc[idx+len(w):]

print(cnt)
