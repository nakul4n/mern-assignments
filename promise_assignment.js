function countdown(max) {
    var count=max;

    return new Promise(function (resolve, reject) {
       
        let iid = setInterval(() => {

            if (max <0) {
               
                return reject(new Error(`enter value greater than 0`));
            }

            if (count<0) { 
                clearInterval(iid); 
                
                return resolve();
            }
            
                console.log(count);
                count--;
            
                
               
            

            }, 1000); 

    });
}

countdown(5).then( ()=> console.log('done'))
.catch(error=>console.log('error',error.message))

console.log('count down started…'); 



