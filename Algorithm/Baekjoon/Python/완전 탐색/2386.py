import sys

while True:
  s = sys.stdin.readline().rstrip().lower()
  if(s[0]=='#'): break
  print(s[0], s[2:].count(s[0]))
