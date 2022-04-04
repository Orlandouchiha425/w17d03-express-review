const express=require('express')
const app=express()
port=3000

app.get('/',(req,res)=>{


    res.send(`<h1>Main App</a>`)

})

app.listen(port, () => console.log(`Now Listening on port ${port}`));