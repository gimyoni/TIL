function solution(n, words) {
    let said = [words[0]];
    let cnt = 1;
    for(let i =1; i<words.length; i++){
        let prev = words[i-1];
        let now = words[i];
        if(now.length<=1) return [i%n+1, cnt];
        if(prev[prev.length-1]!==now[0]) return [i%n+1, cnt];
        if(said.includes(now)) return [i%n+1, cnt];
        if(i%n+1===n){
            console.log(`i=${i} n=${n} i%n=${i%n}`)
            cnt++;
        }
        said.push(now);
    }
    return [0,0];
}
