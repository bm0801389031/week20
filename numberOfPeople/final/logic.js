//function statemetn named busStops with parameter busStop
var number = function(busStops){
    //empty array place holder named inside
      let inside = []
    //empty array place holder named outside
      let outside = []
    //for loop variable assigned to 0 i is les than busStop.length condition
    //i plus plus
      for(let i = 0; i < busStops.length; i++){
    //push called on inside variable parameter of push busStop i index 0 secon index
        inside.push(busStops[i][0])
    //push called outside variable parameter of push busStop i endex 1 second index
        outside.push(busStops[i][1])
      }
    //variable declaration named add assigned inside called upppon with reduce method
    /// accumulator currend accumulator plus current, zero index as starting current
      let add = inside.reduce((acc, cur) => acc + cur, 0)
      //variable declaration named sub assigned inside called upppon with reduce method
    /// accumulator currend accumulator plus current, zero index as starting current
      let sub = outside.reduce((acc, cur) => acc + cur, 0)
          //return addd minus sub
      return add - sub
    }