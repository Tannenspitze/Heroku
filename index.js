const express = require("express")
const app = express()
app.get("/",function(req,res){
res.setEncoding("WORKING!!!")
})
app.listen(process.env.PORT || 5000)
