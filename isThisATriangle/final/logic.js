// function statement named isTriangle with parameter a,b,c
function isTriangle(a,b,c){
    //high level summary
    //triangles generally have equal or close to equal side length. if one
    //side is to long, it is no longer a triangle
    //the way this is checked is a plus b is greater than c
    //a plus c is greater than b
    //c plus b is greater than a
    //all under the same return and and''''' in between each
        return a + b > c && a + c > b && c + b > a;
    }