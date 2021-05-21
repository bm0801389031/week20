//function statement named openOrSenior with parameter data
function openOrSenior(data){
    //return data.map then destructior each sub array my naming them
    //withing the paramter of map () and squar bracket [] to name 
    //the first index of the sub array age comma handicap names the secon index
    //arrow function pointng at my statement all in paranthasis age greater
    //than 54 and hadicap greater tha 7 cose paranthasis  turnary operator 
    /// if truthy 'senior' string if falsy open string
        return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
    }