function solution(lottos, win_nums) {
    var answer = [];
    
    let rank = x => {
        if(x<=1) return 6; 
        return 7-x;
    };
    
    let min = lottos.filter(val => win_nums.includes(val)).length; 
    let max = min+lottos.filter(val => val === 0).length;
    
    return [rank(max), rank(min)]; 
}
