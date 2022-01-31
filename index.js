const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.write({object: null})
})

app.listen(8080)