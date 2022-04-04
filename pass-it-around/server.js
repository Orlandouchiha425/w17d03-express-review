const express = require('express')
const app=express()
const port=3000;


app.get('/',(req,res)=>{


    res.send(`<h1>99 bottles of beer on the wall</h1> <a href="98">take one down and pass it around</a>`)

})
app.get('/:number_of_bottles',(req,res)=>{
if (req.params.number_of_bottles==="0") {
    res.send(`<a href="/">go back to main page</a>`)
    
}
    res.send(`<a href="${req.params.number_of_bottles - 1}">take one down and pass it around</a>
    ${req.params.number_of_bottles} number of beers on the wall`)

})






app.listen(port, () => console.log(`Now Listening on port ${port}`));







