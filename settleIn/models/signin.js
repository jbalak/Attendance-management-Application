const mongoose = require('mongoose');
const settleIn = require('./db');


const setle = new settleIn({
   firstname: "bk",
   lastname: "bk",
   password:"bk",
   email: "bk@j.com",
   phone: 123456789,
   dob: 17/12/2018
   
})

setle.save().then(function(err, result){
    if(err) { console.error(err) }
    else { console.log(result) }
}).catch(function(err){
    console.log(err);
});

