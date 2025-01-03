let express=require('express')
let userRouter=express.Router()
let {registerControler,loginController,userControler,userDeleteControler,userUpdateControler}=require('../controller/user')
userRouter.post('/register',registerControler);
userRouter.post('/login',loginController);
userRouter.get('/allUser',userControler)
userRouter.put('/updateUser/:id',userUpdateControler)
userRouter.delete('/deleteUser/:id',userDeleteControler)

module.exports=userRouter