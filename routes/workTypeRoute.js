let express=require('express');
let WorkTypeRouter=express.Router()
let {allWorkControler,workTypeAddControler,workTypeDeleteControler,workTypeUpdateControler}=require('../controller/workType')
WorkTypeRouter.post('/addWorkType',workTypeAddControler)
WorkTypeRouter.get('/allWorkType',allWorkControler)
WorkTypeRouter.put('/updateWorkType/:id',workTypeUpdateControler)
WorkTypeRouter.delete('/deleteWorkType/:id',workTypeDeleteControler)
module.exports=WorkTypeRouter
