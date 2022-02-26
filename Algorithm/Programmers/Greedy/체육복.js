function solution(n, lost, reserve) {
    var answer = 0;
    let students = new Array(n).fill(1);
    
    //lost = lost.sort((a,b)=>a-b);
    //reserve = reserve.sort((a,b)=>a-b);
    
    let new_lost = lost.filter(val => !reserve.includes(val));
    let new_rv = reserve.filter(val => !lost.includes(val));
 
    for(let l of new_lost){
        students[l-1]-=1;
    }
    
    for(let r of new_rv){
        if(students[r-1]<=0){
            students[r-1]+=1;
            continue
        }
        if(r==1){
            if(students[r]===0){
                students[r]+=1;
            }
        }else if(r == reserve.length){
            if(students[r-2]===0){
                students[r-2]+=1;
            }
        }else{
            if(students[r-2]===0){
                students[r-2]+=1;
            }else if(students[r]===0){
                students[r]+=1;
            }
        }
    }    
    return students.filter((a)=>a).length;
}
