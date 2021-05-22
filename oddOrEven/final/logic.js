//function statement named oddOrEven with parameter array
function oddOrEven(array) {
    //declare a variable giving me the sum off all the elements within 
    //my array
    //let summed assigned array called with reduce method two parameters
    //accumulator and current arrow function  acc plus cur, with a starting 0 acc
       let summed = array.reduce((acc, cur) => acc + cur, 0)
       //return summed modulus 2 equal to remainder of zero
       //truthy 'even' falsy 'odd'
     return summed % 2 == 0 ? 'even' : 'odd'
    }