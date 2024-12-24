const User=require('../modals/user')
let asyncHandler=require('express-async-handler')

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

module.exports={registerControler,loginController}