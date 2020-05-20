const request = require('request')
const orderno = process.argv[2]

const order = (orderid,callback) =>{
    const url ='https://app.ecwid.com/api/v3/16838918/orders?orderNumber='+orderid+'&token=secret_1pudxM5Phxy1WwhJWX2cqPRvXV68sc3X'
request({url: url, json:true},(error, response) => {
    if(response.body.total==0){
        callback('Please enter valid order no.',undefined)
            
        }  

        else if(response.body.errorMessage){

            callback('Please enter valid order no.',undefined)
        
        }
        else{
            callback(undefined, {
                orderNumber: response.body.items[0].orderNumber,
                Status: response.body.items[0].fulfillmentStatus,
                total: response.body.items[0].total,
                paymentStatus: response.body.items[0].paymentStatus
            
            })
       

        }
    })

}

order(orderno ,(error, data) => {
       console.log(data)
       console.log(error)
})