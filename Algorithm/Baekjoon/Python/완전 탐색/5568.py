from itertools import permutations

n, k = int(input()), int(input())
cards = [input().rstrip() for _ in range(n)]

result = set()
for p in permutations(cards,k):
    result.add(''.join(p))
print(len(result))

