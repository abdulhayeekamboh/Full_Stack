const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
PORT = 3400;

app.get('/api', (req,res)=>{
    const datab = [
        {
            image:'https://images.unsplash.com/photo-1728314167652-dc3c8848dd80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D',
            name:'PICTURE',
            titile:'this is a piture that i call from the api.',
        }
    ]
    res.send(datab);
})

app.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`);
})


