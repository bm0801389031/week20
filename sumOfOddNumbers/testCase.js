describe("Tests", () => {
    it("test", () => {
  const { ceil, pow, random } = __backup__;
  
  for (let i = 0; i < 50; i += 1) {
    const n = ceil(random() * 500) + 1;
    Test.assertEquals(rowSumOddNumbers(n), pow(n, 3)); 
  }
    });
  });