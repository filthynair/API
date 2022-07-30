import mongoose from 'mongoose'
const vehicleSchema=new mongoose.Schema({
    car:{
        required:true,
        type:String
    },
    color:{
        required:true,
        type:String
    },
    engine:{
        required:true,
        type:String
    }
})
const vehicleModel=mongoose.model("Vehicle",vehicleSchema)
export default vehicleModel