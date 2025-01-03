const User=require('../modals/user')
let asyncHandler=require('express-async-handler')

let userUpdateControler=asyncHandler(async(req,res)=>{
    console.log('adjkhfj')
    let f=await User.findById(req.params.id)
    console.log('fjdkhfj')
    if(f){
       let f= await User.findByIdAndUpdate(req.params.id,req.body,{runValidators: true})
        res.status(200).send({
            message:"user is successfully updated",
          
           })
    }
    else{
       throw new Error('user is not found')
    }
    
  
})
let userDeleteControler=asyncHandler(async(req,res)=>{
   
    let f=await User.findById(req.params.id)
   
    if(f){
       let f= await User.findByIdAndDelete(req.params.id)
        res.status(200).send({
            message:"user is successfully deleted",
            data:f
           })
    }
    else{
       throw new Error('user is not found')
    }
    
  
})







let userControler=asyncHandler(async(req,res)=>{
    
    let data=await User.find()
    res.status(200).send({
      users:data,
      message:"all user is fetched successfully"
    })

})



let registerControler=asyncHandler(async(req,res)=>{
        let firstName=req.body.firstName.substring(0,2)
        let lastName=req.body.lastName.substring(0,2)
        let mobile=req.body.mobile.substring(6)
        let userid=firstName+lastName+mobile
        req.body.userId=userid
        let u=await User.findOne({"userId":userid})
       
  if(u){
    throw new Error('user is already exist')
  }
  let user=new User(req.body)
  await user.save()
  res.status(201).send({
    user:user,
    message:"user is register successfully"

  })


})
loginController=asyncHandler(async(req,res)=>{
  let {userId,password,email}=req.body;
  console.log('userId',userId)
  let user;
  if(email){user=await User.findOne({email:email})}
  else if(userId){user=await User.findOne({userId:userId}) }
  console.log('user is',user)
  if(!user){
    throw new Error('please register')
  }
  let p=email?await User.findOne({email:email,password:password}):await User.findOne({userId:userId,password:password}) 
  console.log('password',p)
 
  if(!p){
    throw new Error('please provide correct password')  
  }
  res.status(200).send({
    message:"user is successfully login",
    user:user,
  })
})

module.exports={registerControler,loginController,userControler,userDeleteControler,userUpdateControler}