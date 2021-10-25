import re

def solution(new_id):
    answer = ''
    # 1단계 & 2단계
    for i in new_id.lower():
        if i.isalnum() or i in "._-":
            answer += i
    # 3단계
    answer = re.sub('\.\.+','.',answer)
    # 4단계
    answer = answer.strip('.')
    # 5단계
    if answer=='': answer+= 'a'
    #6단계 & 7단계
    if len(answer) >= 16:
        return answer[:15].strip('.')
    elif len(answer)<=2:
        answer += answer[-1]*(3-len(answer))
        return answer
    return answer
