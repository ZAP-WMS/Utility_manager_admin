let express=require('express')
let userRouter=express.Router()
let {registerControler,loginController}=require('../controller/user')
userRouter.post('/register',registerControler);
userRouter.post('/login',loginController);

module.exports=userRouter