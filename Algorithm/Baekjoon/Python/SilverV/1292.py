nums = []
for i in range(1, 46):
    nums += [i] * i
    
A, B = map(int, input().split())
print(sum(nums[A-1:B]))
