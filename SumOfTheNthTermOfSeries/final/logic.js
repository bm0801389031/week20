//function name SeriesSum with paramter n
function SeriesSum(n) {
    //variable declaration place holder 0
      var sum = 0;
    //for loop variable i index assigned to zero; i less than n;
    //i plus plus
      for(var i = 0; i < n; i++) {
    //to get the series fraction to incroment the formula is 
    //sum plus equals 1 divided by parenthese 3 times i plus 1
        sum += 1 / (3 * i + 1);
      }
    //return call toFixed method on sum with parameter 2 meaning return 
    //only two decimal places
      return sum.toFixed(2);
    }