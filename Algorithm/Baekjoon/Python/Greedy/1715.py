import heapq
import sys

input = sys.stdin.readline

cards = []
answer = 0

for _ in range(int(input())):
    heapq.heappush(cards, int(input()))

if len(cards) == 1:
    print(0)
else:
    while len(cards) > 1:
        tmp = heapq.heappop(cards) + heapq.heappop(cards)
        answer += tmp
        heapq.heappush(cards, tmp)

    print(answer)
