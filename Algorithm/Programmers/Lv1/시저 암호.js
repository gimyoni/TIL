function solution(s, n) {
  
    let arr = s.split('');
    let str = '';
    
    re:for(let i = 0; i<s.length; i++){
        if(s[i] === ' '){
            str+=' '; 
            continue re;  
        } 
        let a = s.charCodeAt(i);
        if(a<=90 && a+n>90){
            a = a+n-26;
        }else if(a<=122 && a+n>122){
            a = a+n-26;
        }else{
            a+=n;
        }
        str+=String.fromCharCode(a)
    }
    return str;
}
