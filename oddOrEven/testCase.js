describe('Fixed tests', () => {
    it('Edge tests', () => {
      Test.assertEquals(oddOrEven([0]), 'even')
      Test.assertEquals(oddOrEven([1]), 'odd')
      Test.assertEquals(oddOrEven([]), 'even')
    });
    
    it('Even tests', () => {
      Test.assertEquals(oddOrEven([0, 1, 5]), 'even')
      Test.assertEquals(oddOrEven([0, 1, 3]), 'even')
      Test.assertEquals(oddOrEven([1023, 1, 2]), 'even')
    });
    
    it('Negative Even tests', () => {
      Test.assertEquals(oddOrEven([0, -1, -5]), 'even')
      Test.assertEquals(oddOrEven([0, -1, -3]), 'even')
      Test.assertEquals(oddOrEven([-1023, 1, -2]), 'even')
    });
    
    it('Odd tests', () => {
      Test.assertEquals(oddOrEven([0, 1, 2]), 'odd')
      Test.assertEquals(oddOrEven([0, 1, 4]), 'odd')
      Test.assertEquals(oddOrEven([1023, 1, 3]), 'odd')
    });
    
    it('Negative Odd tests', () => {
      Test.assertEquals(oddOrEven([0, -1, 2]), 'odd')
      Test.assertEquals(oddOrEven([0, 1, -4]), 'odd')
      Test.assertEquals(oddOrEven([-1023, -1, 3]), 'odd')
    });
  });
  
  describe('Random tests', () => {  
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function randEven() {
      let num = rand(1,1000000);
      num = num % 2 == 0 ? num : num + 1;
      let sign = rand(0,9999999)%2?-1:1;
      return num * sign;
    }
    
    function generateEven() {
      let even = [];
      for(let i=0;i<10;i++)
        even.push(randEven());    
      return even;
    }
    it('Even tests', () => {
      for(let i=0;i<40;i++)
        Test.assertEquals(oddOrEven(generateEven()), 'even')
    });
    
    function randOdd() {
      let num = rand(1,1000000);
      num = num % 2 == 0 ? num + 1 : num;
      let sign = rand(0,9999999)%2?-1:1;
      return num * sign;
    }
    
    function generateOdd() {
      let odd = [randOdd()];
      for(let i=0;i<10;i++)
        odd.push(randOdd());
      return odd;
    }
    it('Odd tests', () => {
      for(let i=0;i<40;i++)
        Test.assertEquals(oddOrEven(generateOdd()), 'odd')
    });
    
    it('Mixed tests', () => {
      for(let i=0;i<40;i++) {
        let decision = rand(0,9999999)%2?'odd':'even';
        Test.assertEquals(oddOrEven(decision=='odd'?generateOdd():generateEven()), decision)
      }
    });
  });