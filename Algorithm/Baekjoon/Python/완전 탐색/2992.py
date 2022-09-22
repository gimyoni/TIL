import itertools

num = list(input())
arr = list(itertools.permutations(num, len(num)))
arr.sort(reverse=True)

result = []
for a in arr:
  result.append("".join(a))

idx = result.index("".join(num))
print(result[idx-1] if idx != 0 else 0)
