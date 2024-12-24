const express=require('express')
const jsonwebToken=require('jsonwebtoken')
const { globalError, urlNotFoundError } =require('./../middleware/globalError')
const cors=require('cors')
require('dotenv').config()
require('./../config/dbConfig')
let UserRouter=require('../routes/userRoute');
let CourierRouter=require('../routes/courierRoute')

const app=express()
app.use(cors())
app.use(express.json());

app.use('/user',UserRouter)
app.use('/courier',CourierRouter)
app.use(urlNotFoundError)
app.use(globalError)

module.exports=app
