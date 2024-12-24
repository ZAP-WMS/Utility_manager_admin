let Courier=require('../modals/courier')
let asyncHandler=require('express-async-handler')
let createCourier=asyncHandler(async(req,res)=>{
    let body=req.body
    let courier=new Courier(body)
    await courier.save()
   res.status(201).send({
    message:"courier is successfully created",
    data:courier
   })
})
let approvedCourier=asyncHandler(async(req,res)=>{
    console.log('arman')
    let approved=req.body.approved
    let f=await Courier.findById(req.params.id)
   
    if(f){
       let f= await Courier.findByIdAndUpdate({_id:req.params.id},{$set:{approved:approved}})
        res.status(200).send({
            message:"courier is successfully approved",
            data:f
           })
    }
    else{
       throw new Error('couirer is not found')
    }

})
let recievedCourier=asyncHandler(async(req,res)=>{
  
    let recieved=req.body.recieved
    let f=await Courier.findById(req.params.id)
   
    if(f){
       let udata= await Courier.findByIdAndUpdate({_id:req.params.id},{$set:{recieved:recieved}})
        res.status(201).send({
            message:"courier is successfully recieved",
            data:udata
           })
    }
    else{
       throw new Error('couirer is not found')
    }

})
let allCourier=asyncHandler(async(req,res)=>{
    let data=await Courier.find()
    res.status(200).send({
    message:"courier is successfully created",
    data:data
   })
})
module.exports={createCourier,allCourier,approvedCourier,recievedCourier}