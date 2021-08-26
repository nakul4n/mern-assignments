function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;
    return true;
}
function findPrimesPromise(min, max) {

    return new Promise(function (resolve, reject) {
        let lo = min;
        let hi = Math.min(max, min + 1000); 
        let primes = [];

          function intervaltime()
          {
            if (max <= min) {
                
                return reject(new Error(`Invalid Range ${min}-${max}`));
            }

            if (lo >= max) { 
               
                return resolve(primes);
            }

            for (let i = lo; i < hi; i++) {
                if (isPrime(i))
                    primes.push(i);
            }

            lo = hi;
            hi = Math.min(max, lo + 1000);
            setTimeout(intervaltime,10);
        }
        intervaltime(); 


    });
}


    

    
/*findPrimesPromise(0,100)
    
        .then(primes=>{
            
            console.log('total primes is',primes.length);
            
        })
        .catch(error=>console.log('error',error.message))
        */
    

        module.exports={
            findPrimesPromise,
            isPrime
        }
    

