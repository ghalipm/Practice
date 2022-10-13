//find first non - duplicate char in word
let word='abcdagabcbdd';
let charset=new Set();

function count(word, char){
    let count=0;
    for (let i = 0; i < word.length; i++) {
        if(word.charAt(i)==char){
            count++;
        }
    }
    return count;
}

function firstnondupchar(word){
    for (let i = 0; i <word.length ; i++) {
        if(count(word, word.charAt(i))==1){
            return word.charAt(i);
        }
    }
}

console.log('first non duplicated char in '+word+' is '+firstnondupchar(word));