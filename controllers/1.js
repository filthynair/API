import neatCsv from 'neat-csv'
import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'
import vehicleModel from '../models/2.js'
const _filename =fileURLToPath(import.meta.url) //
export const allVehicle=async(req,res)=>{
    const _dirname=path.dirname(_filename)
    fs.readFile(path.join(_dirname,"../sample.csv"),async(err,data)=>{
        let result
        result=await neatCsv("car,color,engine\n"+data)
        const addCars=await vehicleModel.insertMany(result)
    
        res.status(200).json({addCars})

    })
}
export const getAllData=async(req,res)=>{
    const allVehicles = await vehicleModel.find()
    res.json({allVehicles})
}
export const getCarCount=async(req,res)=>{

    const allVehicles = await vehicleModel.find()
    let a={}
    for(let i=0;i<allVehicles.length;i++){
        let b=allVehicles[i]
        let carCount=b.car
        if(a[carCount]){
            a[carCount]=a[carCount]+1
        }
        else{
            a[carCount]=1
        }    }
    res.json({a})
}
export const getColorCount=async(req,res)=>{

    const allVehicles = await vehicleModel.find()
    // const a = await vehicleModel.aggregate([
    //     {
    //         $group:{_id:"$car"}
    //     }
    // ])
    let a={}
    for(let i=0;i<allVehicles.length;i++){
        let b=allVehicles[i]
        let colorCount=b.color
        if(a[colorCount]){
            a[colorCount]=a[colorCount]+1
        }
        else{
            a[colorCount]=1
        }    }
    res.json({a})
}
export const getEngineCount=async(req,res)=>{

    const allVehicles = await vehicleModel.find()
    let a={}
    for(let i=0;i<allVehicles.length;i++){
        let b=allVehicles[i]
        let engineCount=b.engine
        if(a[engineCount]){
            a[engineCount]=a[engineCount]+1
        }
        else{
            a[engineCount]=1
        }    }
    res.json({a})
}
export const getSummary=async(req,res)=>{

    const allVehicles = await vehicleModel.find()
    let a={}
    for(let i=0;i<allVehicles.length;i++){
    let b=allVehicles[i]
    let obj1=b.engine
    let obj2=b.car
    if(a[obj1] && a[obj1][obj2])
    {
            a[obj1][obj2] =a[obj1][obj2]+1
    }
    else if (a[obj1]){
        a[obj1][obj2]=1
    }
    else
    {
        a[obj1]={[obj2]:1}
    }   
    }
    res.json({a})
}

// {
//     allVehicle,getAllData
// }

