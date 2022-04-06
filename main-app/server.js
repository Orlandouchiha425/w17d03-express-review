const express=require('express')
const app=express()
port=3000

app.get('/',(req,res)=>{


    res.send(`<h1>Main App</a>`)

})
///https://betterprogramming.pub/fibonacci-algorithm-in-javascript-45743f3a0ff6 
///I Have no idea about finobacci--- 
app.get('/:id',(req,res)=>{
    function fibonacci(element) {
        const sequence = [0, 1];
        for (i = 2; i <= element; i++) {
            sequence[i] = sequence[i - 2] + sequence[i - 1];
        }
        return sequence[element];
    }
    res.send(fibonacci())

})




app.listen(port, () => console.log(`Now Listening on port ${port}`));



