function solution(maps) {
    let xpos=[0,0,1,-1];
    let ypos=[1,-1,0,0];
    
    var answer = -1;
    const q=[[0,0,1]];
    while(q.length!=0){
        let y=q[0][0];
        let x=q[0][1];
        let cnt=q[0][2];
        q.shift();
        if(y===maps.length-1 && x===maps[0].length-1){
            answer=cnt;
            break;
        }
        for(let i=0;i<4;i+=1){
            let yy=y+ypos[i];
            let xx=x+xpos[i];
            if(xx<0 || yy<0 || xx>=maps[0].length || yy>=maps.length)continue;
            if(maps[yy][xx]==2)continue;//방문했을 때
            if(maps[yy][xx]==0)continue; //벽일 때
            maps[yy][xx]=2;
            q.push([yy,xx,cnt+1]);  
        }
        
    }
    return answer;
}
