//function statement named printerError with parameter s
function printerError(s) {
    //declare a place holder variable named count to zero
      let count = 0
    // declare a new variable out of the old parameter named ss
    // replace letters from the string n - z using regex with hash 
    // split every letter to make an array of strings of letters
      let ss = s.replace(/[n-z]/g, '#').split('');
    //for loop let i asssigned to zero i is less than ss.length condition
    //i plus plus after every iteration
      for(let i = 0; i < ss.length; i++){
    //conditional if statemetn ss at i index equal to '#'
        if(ss[i] == '#'){
            //count plus plus 
          count++
        }
      }
      //return count plus quates which idicates make in to string separated by 
      //forwar slash plus s.length
      return count + '/' + s.length
    }