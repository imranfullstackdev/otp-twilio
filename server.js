require('dotenv').config()

var sid=process.env.SID

var auth_token=process.env.AUTHtOKEN

const twilio = require('twilio')(sid,auth_token)


twilio.messages.create({
    from:'+17207348246',
    to:'+91-6300027879',
    body:`your otp is ${Math.floor(Math.random()*10000)}`
})
.then((res)=>{
    console.log(res.body)
})
.catch((err)=>{
    console.log(err)
})
