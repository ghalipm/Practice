//Define the function
function reverseTheWord(word){
    let newWord='';
    for (let i = word.length; i >=0; i--) {
        newWord+=word.charAt(i);
    }
    console.log(word+ ' reversed: '+newWord)
}

//Call the function
reverseTheWord('Gabbay');



