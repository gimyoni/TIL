function solution(sizes) {
    let w = sizes.map(el => el[0]);
    let h = sizes.map(el => el[1]);

    for (let i = 0; i < sizes.length; i++) {
        if (w[i] < h[i]) {
            let temp = w[i];
            w[i] = h[i];
            h[i] = temp;
        }
    };
    
    let big = Math.max(...w);
    let small = Math.max(...h);
  
    return big * small;
}
