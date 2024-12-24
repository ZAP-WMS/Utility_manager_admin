let express=require('express');
let CourierRouter=express.Router()
let {createCourier,allCourier,approvedCourier,recievedCourier}=require('../controller/courier')
CourierRouter.post('/addCourier',createCourier)
CourierRouter.get('/allCourier',allCourier)
CourierRouter.patch('/approvedCourier/:id',approvedCourier)
CourierRouter.patch('/recievedCourier/:id',recievedCourier)
module.exports=CourierRouter




