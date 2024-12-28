let WorkType=require('../modals/workType')
let asyncHandler=require('express-async-handler')

let allWorkControler=asyncHandler(async(req,res)=>{
    let data=await WorkType.find()
    res.status(200).send({
      data:data,
      message:"all work  is fetched successfully"
    })

})



let workTypeAddControler=asyncHandler(async(req,res)=>{

    let body=req.body

    let work=new WorkType(body);
    await work.save()
    res.status(200).send({
        users:work,
        message:"work is successfully added"
      })

  
})
let workTypeUpdateControler=asyncHandler(async(req,res)=>{
   
    let f=await WorkType.findById(req.params.id)
   
    if(f){
       let f= await WorkType.findByIdAndUpdate(req.params.id,req.body,{runValidators: true})
        res.status(200).send({
            message:"work type is successfully updated",
          
           })
    }
    else{
       throw new Error('work type is not found')
    }
    
  
})
let workTypeDeleteControler=asyncHandler(async(req,res)=>{
   
    let f=await WorkType.findById(req.params.id)
   
    if(f){
       let f= await WorkType.findByIdAndDelete(req.params.id)
        res.status(200).send({
            message:"work type is successfully deleted",
            data:f
           })
    }
    else{
       throw new Error('work type is not found')
    }
    
  
})
module.exports={allWorkControler,workTypeAddControler,workTypeDeleteControler,workTypeUpdateControler}