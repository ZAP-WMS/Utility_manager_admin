let globalError=(err,req,res,nex)=>{
    let stack=err.stack
    console.log('in global error')
  // console.log('error foun in page:',stack)
    let status=err.statusCode?err.statusCode:500
   // console.log('status code is:',status)
    let message=err.message
    res.status(status).send({
        stack,
        message
    })

}

let urlNotFoundError = (req, res, next) => {
    console.log('url is:',req.originalUrl)
    const err = new Error(`Route ${req.originalUrl} not found`);
    next(err);
  };

 module.exports = {
    globalError,
    urlNotFoundError
};