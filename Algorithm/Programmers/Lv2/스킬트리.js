function solution(skill, skill_trees) {
    let newArr = skill.split(""); 
    let str = 0;
    let count = 0;
    for(let i=0;i<skill_trees.length;i++){
        // 문자열을 배열로 만들어서 한 글자씩 꺼내서 newArr에 포함하는지 확인하고 문자열로 만든다
        str = skill_trees[i].split("").filter(element => newArr.includes(element)).join("");
        // str과 str길이만큼의 skill 문자열과 비교해 같다면 count++ 
        if(str === skill.substring(0,str.length)){
            count++;
        }
    }
    return count; 
}
