//function statement named reverseWords with parameter str
function reverseWords(str) {
    //return call split method on str to split each word
    //in to an array of words then call map to make a function on 
    //each word str arrrow function str.split split each letter of the word
    //then call reverse method and then call join method to join back
    // all the letters then join method again to join all the words
        return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
    }