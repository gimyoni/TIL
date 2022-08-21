n = int(input())
time_table = []
for i in range(n):
  time_table.append(list(map(int,input().split())))
time_table.sort(key=lambda x: (x[1], x[0]))

end_time = 0
count = 0
for j in time_table:
  if j[0] >= end_time:
    end_time = j[1]
    count += 1
print(count)
