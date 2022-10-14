//Define the function
function reverseTheWord(word){
    let newWord='';
    for (let i = word.length; i >=0; i--) {
        newWord+=word.charAt(i);
    }
    return newWord;
}

function palindrome(word) {
     return word.toUpperCase()===reverseTheWord(word).toUpperCase();
}

let mypalindrome=(word) => word.toUpperCase()===reverseTheWord(word).toUpperCase();


//Call the function
word='Anna'; // baba, racecar;
console.log(word+' reversed: '+reverseTheWord(word))
console.log('It is palindrome: '+palindrome(word));
console.log('It is palindrome: '+mypalindrome(word));




