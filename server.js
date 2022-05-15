const express = require('express')
const app = express();
app.get('/tip/:total/:tipPercentage',(req,res)=>{
    res.send(`Tip for the Total of ${req.params.total} is ${req.params.tipPercentage}`)
})
app.listen('3999',(req,res)=>{
    console.log('listening to port 3999')
})
