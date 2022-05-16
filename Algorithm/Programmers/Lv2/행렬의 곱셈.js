function solution(arr1, arr2) {
    let result = [];
    let col1 = arr1[0].length;
    let col2 = arr2[0].length;
    arr1.forEach(function(array,idx){
        let line = [];
        for(let a = 0; a<col2; a++){
            let sum = 0;
            for(let i = 0; i<col1; i++){
                sum += array[i] * arr2[i][a];
            }
            line.push(sum);
        }
        result.push(line);
    })
    return result;
}
