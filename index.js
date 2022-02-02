const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.write({object: null})
})
app.post("/send", (req,res) => {
    const {name,temp,altitude,latitude,lagitude,speed,course} = req.body
    
})
app.listen(8080)