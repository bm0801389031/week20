//function statement named friend with paramter friends
function friend(friends){
    //empty array place holder named friendsArray
      let friendsArray = []
    //for loop let i assigned to zero; condition i less than friends length;
    /// i plus plus
      for(let i = 0; i<friends.length; i++){
     //if friends at i index length is equal to 4 
        if(friends[i].length == 4){
      //run this statement friends array.push friends at i index 
      //this will create a new array with friends of the length size 4
          friendsArray.push(friends[i])
        }
      }
      //reutrn friends array 
    return friendsArray
    }