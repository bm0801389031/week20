//function statement named findNextSquare with parameter sq
function findNextSquare(sq) {
    //variable named root assigned to get me the rooot of my main paramter
        var root = Math.sqrt(sq);
    //return root modulus 1 equal to 0, this verifies my root is true
    // turnary operator if truthy continu Math.pow with parameter
    //root + 1, to the power or 2 
    //if falsy just return me negative one
        return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
    }