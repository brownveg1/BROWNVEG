const request = require('request')

const geocode = (sku, callback) => {
    const url = 'https://app.ecwid.com/api/v3/16838918/products?sku='+sku+'&enabled=true&token=public_k4WsbJ2dkwGC4rnyiWVZ3zyFKqbnfjFV'
    
    request({ url: url, json: true }, (error, response) => {
        if(response.body.total==0){
            callback('product not avaible',undefined)
                
            }  
            else{
                callback(undefined, {
                    product: response.body.items[0].name,
                    price: response.body.items[0].price
                
                })
           

            } 
         })

 }

geocode('0004', (error, data) => {
        console.log(data)
        console.log(error)
})