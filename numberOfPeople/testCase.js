describe("Basic Tests", function(){
    Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);
    Test.assertEquals(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    Test.assertEquals(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    Test.assertEquals(number([[0,0]]),0);
    });
    
    const randint = (a,b) => floor((random() * b) + a);
    
    let randomTest = function(){
      let n = randint(0,100);
      let arr = [[n,0]];
      for(let i = 0; i < randint(0,100);i++){
        let x = randint(0,100);
        let y = randint(0,n);
        arr.push([x,y]);
        n += x - y;
      }
      Test.assertEquals(number(arr),n);
    };
    
    describe("Random Tests", function(){
      for(let i = 0; i < 100; i++){
        randomTest();
      }
    })