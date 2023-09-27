const express = require ('express')
const app = express()

app.listen(3000)

app.get('/', (req,res) => {
    console.log('testing pt2')
    res.send("hiiiii")
})
