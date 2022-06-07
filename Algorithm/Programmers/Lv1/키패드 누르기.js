function solution(numbers, hand) {
    var answer = '';
    let numpad = [[1,4,7,'*'], [2,5,8,0], [3,6,9,'#']];
    let l_hand = [0,3];
    let r_hand = [2,3];
        
    function getLeft(hand, n){
        let result=hand[1]-numpad[1].indexOf(n);
        result = Math.abs(result);
        if(hand[0]===0) result+=1;
        return result;
        
    }
    
    function getRight(hand, n){
        let result=hand[1]-numpad[1].indexOf(n); 
        result = Math.abs(result);
        if(hand[0]===2) result+=1;
        return result;
    }
    
    numbers.forEach(function(n){
        let chk = 0;
        if(numpad[0].includes(n)){    
            answer+='L';
            l_hand = [0,numpad[0].indexOf(n)];
            return;
        }
        else if(numpad[2].includes(n)){
            answer+='R';
            r_hand = [2,numpad[2].indexOf(n)];
            return;
        }
        else{
            let l_distance = getLeft(l_hand, n);
            let r_distance = getRight(r_hand, n);

            if(l_distance === r_distance){
                hand === "left"? chk = 0 : chk = 1;
            }else if(l_distance<r_distance){
                chk = 0;
               
            }else{
                chk = 1;
            }
            
            if(chk === 0){
                answer +='L';
                l_hand = [1,numpad[1].indexOf(n)];
              
            }else{
                answer +='R';
                r_hand = [1,numpad[1].indexOf(n)];
            }
         
        }
        
    })
    
    return answer;
}
