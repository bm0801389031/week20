//function named binaryArrayToNumber with parameter arr
function binaryArrayToNumber(arr){
    //return parseInt method called with paramter first being the string
    //the way i turn arr into a string is by calling join method
    //second parameter is 2 for binary numberal system, if i were parsing 
    //a number that was a string i would use 10 numberal system 0-9
    // the 2 allows me to parse a binery number to an int
        return parseInt(arr.join(''), 2)
    }