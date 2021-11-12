n = int(input())
cards = list(map(int,input().split()))

level = max(cards)
del cards[cards.index(max(cards))]
gold = 0
for i in range(len(cards)):
  gold += level+cards[i]
print(gold)
