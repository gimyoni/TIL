def solution(a, b):
    month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    
    for i in range(1, a):
        day = month[i]%7
        for j in range(0, day):
            week.append(week.pop(0))
    
    return week[b%7]
