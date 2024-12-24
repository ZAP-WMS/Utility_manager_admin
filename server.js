const app=require('./app/app')

const port =process.env.port||5000
app.listen(port,()=>console.log(`app is listining is port ${port}`))