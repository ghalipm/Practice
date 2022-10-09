//Define the function
function reverseTheWord(word){
    let newWord='';
    for (let i = word.length; i >=0; i--) {
        newWord+=word.charAt(i);
    }
    return newWord;
    //console.log(word+ ' reversed: '+newWord)
}

function palindrome(word) {
    return word.toUpperCase()===reverseTheWord(word).toUpperCase();
}

//Call the function
word='Anna'; // baba
console.log(word+' reversed: '+reverseTheWord(word))
console.log('It is palindrome: '+palindrome(word));




