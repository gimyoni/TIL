function solution(arr) {
    const answer = [0, 0];
    let n = arr.length;

    while (n >= 2) {
        let tempArr = [];
        for (let i = 0; i < arr.length; i += n) {
            for (let j = 0; j < arr[i].length; j += n) {
                const square = arr.slice(i, i + n).map(e => e.slice(j, j + n));
                const sum = square.flatMap(e => e).reduce((a, b) => a + b);
                sum % (n * n) === 0 ? answer[sum / (n * n)]++ : tempArr.push(square);
            }
        }
        arr = tempArr.flatMap(e => e);
        n /= 2;
    }

    arr.flatMap(e => e).forEach(e => answer[e]++);
    return answer;
}
