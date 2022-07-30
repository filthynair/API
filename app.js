import express from 'express'
const app=express()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import vehicleRoute from './routes/3.js'
// import 

dotenv.config()
app.get('/',(req,res)=>{
    res.json({msg:"myre"})
})
app.use('/',vehicleRoute)

// app.use('/vehicle',)
// /vehicle
app.listen(3000,async()=>{
    await mongoose.connect(process.env.MONGO_URI)

    console.log('db is connected')
})