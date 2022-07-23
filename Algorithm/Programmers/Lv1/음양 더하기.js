function solution(absolutes, signs) {
    absolutes = absolutes.map(function(val, idx){
        return signs[idx]===true ? val : val*-1;
    });
    return absolutes.reduce((sum, current) => sum + current, 0);
}
