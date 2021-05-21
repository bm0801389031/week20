//function statemetn named divisor with parameter integer
function divisors(integer){
    //place holder empty array anmed res
        var res = []
    //for loop variable i assigned to 2 as initiator
    // i is less or equal to integer condition
    //i plus plus after every loop
        for (var i = 2; i <= integer; i++){
    //if statemetn integer mudulus i is equal to zero
    
            if(integer % i == 0){
    //res.push i 
    //this bushes every i index that is divisable
             res.push(i);
        }
        }
    //return res.length which checks that the length is at least one
    //turnary operator res if truthy integer if falsy plus ' is prime'
        return res.length ? res : integer + ' is prime'
    }