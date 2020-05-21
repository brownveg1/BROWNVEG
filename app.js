const request = require('request')
const productid = process.argv[2]

const order = (sku,callback) =>{
    const url ='https://app.ecwid.com/api/v3/16838918/products?sku='+sku+'&token=secret_1pudxM5Phxy1WwhJWX2cqPRvXV68sc3X'
request({url: url, json:true},(error, response) => {
    if(response.body.total==0){
        callback('Please enter valid order no.',undefined)
            
        }  

        else if(response.body.errorMessage){

            callback('Please enter valid order no.',undefined)
        
        }
        else{
            callback(undefined, {
                Product: response.body.items[0].name,
               
                price: response.body.items[0].price
            
            })
       

        }
    })

}

order(productid ,(error, data) => {
       console.log(data)
       console.log(error)
})