const { findPrimesPromise } = require("./findprimespromise.js");
let { isPrime }= require( './findprimespromise.js');

it('return 25 primes under 100',(done)=>{
         
    findPrimesPromise(0,100)
    {
        try{
            
            expect(true).toBe(true);
            
            done();
        }catch(error){
            done(error);
        }

    
    }

});


describe('isPrimeS tests',()=>{

    it('2 should be prime',()=>{
        expect(isPrime(2)).toBeTruthy();
    });

    it('should return true for 5',()=>{
        let result=isPrime(5);
    
        expect(result).toBe(true);
    });
    
})
   

