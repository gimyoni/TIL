function solution(board, size) {
  const final = board.reduce((scores, row) => {
  const newScores = [];
   
    scores.forEach((score, iscore) => {        
      row.forEach((v, iv) => {
        if (iv === iscore) return;
        if (!newScores[iv]) newScores[iv] = [];
        newScores[iv].push(score + v);
      }); // end of row.forEach
    }); // end of scores.forEach
      
    return newScores.map(scores => Math.max(...scores));
  }); // end of reduce
    console.log(final);
  return Math.max(...final);
}
