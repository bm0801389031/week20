//function statement named validatePIN with param pin
function validatePIN(pin) {
    //return regular expression and here is a break down
    // start of a regex / and next regexp is ^ which means
    // there is nothing other than what we are checking for in regex
    // () groups multiple tokens togeather tokens are:
    //are \d which matches any digit
    //{6} and{4} a quantifier matches 4 or 6 of the previous token
    // \d in this case
    // $ checks that at the end of the string we dont have any thing else 
    //other than what we are looking for which oare only digits
    // and or in regexp is |
        return /^(\d{4}|\d{6})$/.test(pin)
    }