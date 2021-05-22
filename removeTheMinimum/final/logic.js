//function statement named removeSmallest with parameter numbers
function removeSmallest(numbers){
    //declare new variable called indexOfMin self explanitory
    //assigned to numbers. called with indexOf method wich returns the index
    //of the specified paramter which in this case is static method
    //Math.min with numbers aas its parameter with spread operator to 
    //target the array
        let indexOfMin = numbers.indexOf(Math.min(...numbers));
    //return an array indicated by the square brackets in two portions
    //spread operator to target the array withing numbers call slice
    //on numbers starting at zero index and ending before indexOfMin
    //this will pull the new array up until the indexOfMin,
    //then again call slice on spread operator numbers variable
    //indicating the biggining of the array to pull from elements
    //that would be indexOfMin plus 1
        return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
    }