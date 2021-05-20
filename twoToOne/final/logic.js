//function statement named longest with parameter s1, s2
function longest(s1, s2) {
    //return Array.from static method to return me an array out of 
    //my object like array; new Set which pulls only onique carracters
    //from both strings s1 + s2 as paramter of Set
    //call sort method to sort the new array in ascending order
    //join method to join the array of strings in to one string
        return Array.from(new Set(s1 + s2)).sort().join('');
    }
    
    
    
    
    