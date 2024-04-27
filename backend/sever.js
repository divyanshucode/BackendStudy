 import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Server is ready")
// })

//get a list of 5 quotes
app.get('/api/quotes',(req,res)=>{
    const quotes = [
        {
            id:1,
            title:"Quote 1",
            content:"Life is what happens when you're busy making other plans."
        },
        {
            id:2,
            title:"Quote 2",
            content:"The only way to do great work is to love what you do."
        },
        {
            id:3,
            title:"Quote 3",
            content:"Get busy living or get busy dying."
        },
        {
            id:4,
            title:"Quote 4",
            content:"nature is not a place to visit. it is home."
        },
        {
            id:5,
            title:"Quote 5",
            content:"money can't buy happiness but it's more comfortable to cry in a Mercedes than on a bicycle."
        },
    ];
    res.send(quotes);
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:%${port}`)
    })