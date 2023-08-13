const express = require('express');

const bodyParser  = require('body-parser')
const  fs = require('fs')
const  morgan = require('morgan')
const  cors = require('cors')

//declare app
const app  = express()
const port = 8000;

// moddlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// default rpute
app.get('/',(req,res)=>res.status(200).send({
    message: "server is running..."
}))

const WriteTextToFile = async(contentToWrite)=>{
    fs.writeFile('./src/Components/user.json', contentToWrite,(err)=>{
        console.log("contentToWrite", contentToWrite);
        if(err){
            console.log(`write file error, ${err}`)
        }else{
            console.log('Data added successfully')
        }

    })
}

app.post('/signup', async(req, res, next)=>{
    const requestBody = JSON.stringify(req.body)
    await WriteTextToFile(requestBody)
    res.status(200).send({
        message: "Sign up success"
    })
})

//404 route for server
app.use((req,res, next)=>res.status(404).send({
    message: "Could not find specific route that was requested"
}))

// run server
app.listen(port,()=>{
    console.log(` !!! server is running 
    !!!! Listening for incoming request on port ${port}
    !!! http:''localhost:5000`)
})