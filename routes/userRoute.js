let express=require('express')
let userRouter=express.Router()
let {registerControler,loginController,userControler}=require('../controller/user')
userRouter.post('/register',registerControler);
userRouter.post('/login',loginController);
userRouter.get('/allUser',userControler)

module.exports=userRouter