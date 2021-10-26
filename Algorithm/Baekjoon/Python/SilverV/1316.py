N=int(input())
cnt=0
for _ in range(N):
    w =input()
    for i in range(len(w)-1):
        if w[i]!= w[i+1]:
            if w[i] in w[i+1:]:
                N-=1
                break
print(N)
