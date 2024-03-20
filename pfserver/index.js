// loads .env file contenets into process .env by default

require('dotenv').config();
const express = require('express')
const cors = require('cors') 
const router = require('./Router/router')
require('./DB/connection')


//create express server

const pfServer = express()

//data sharing
pfServer.use(cors())
//parse json
pfServer.use(express.json())

pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT =4000 || process.env.PORT

pfServer.listen(PORT, () => {
  console.log(`Project Fair started running at port:${PORT} and waiting for the client request!`);
})

pfServer.get( '/', (req , res) =>{

    res.send('<h1>Project  Fair Server started and waiting for the client request!!!</h1>');

})

pfServer.post('/' , (req ,res)=>{
    res.send('post request')
})
