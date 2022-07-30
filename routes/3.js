import express from 'express'
import {allVehicle,getAllData,getCarCount,getColorCount,getEngineCount,getSummary} from '../controllers/1.js' //{getAll,all}
const router =express.Router()
router.post('/load',allVehicle)
router.get('/vehicle',getAllData)
router.get('/summary/name',getCarCount)
router.get('/summary/color',getColorCount)
router.get('/summary/transmission',getEngineCount)
router.get('/transmission/stat',getSummary)


export default router





// const {as} = {as:15,b:20}

// const obj = {as:15,b:20}
//const as = obj.as


