const express = require('express')
const userRouter = express.Router()
const { AuthMiddleware } = require("../middleware/auth");


// Product Api
userRouter.get('/products',AuthMiddleware, (req, res)=>{
    try {
   const user = req.body;
   console.log(user);
   
res.send({
    message: "Products api Successfully",
    user
})  
    } catch (error) {
        console.log("Product Api Error : ", error );
        res.status(400).send("Product Api Error : ", error)
    }
});

module.exports ={
    userRouter
}
