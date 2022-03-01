function solution(genres, plays) {
    let song = {};
    genres.forEach(function(val, idx){
        if(song[val]){
            song[val]+=plays[idx];
        }else{
            song[val]=plays[idx];
        }
    }) 
    const sortSong = Object.entries(song).sort(([, a], [, b]) => b-a);
    
    let answer= []; 
    
    for(let s of sortSong){ 
        let g = [];
        for(let i in genres){ 
            if(genres[i]===s[0]){
                g.push(plays[i]);
            }
        }
        if(g.length===1){
            answer.push(plays.indexOf(g[0])); 
            continue;
        }
        g.sort((a,b)=>b-a); 
        if(g[0]===g[1]){ 
            answer.push(plays.indexOf(g[0]));
            plays[plays.indexOf(g[0])]=-1;
            answer.push(plays.indexOf(g[1]));
            continue;
        }
        answer.push(plays.indexOf(g[0]),plays.indexOf(g[1])); 
    }

    return answer;
}
