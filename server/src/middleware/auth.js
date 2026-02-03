const jwt = require('jsonwebtoken');
const { User } = require('../model/user');


const AuthMiddleware = async (req, res, next)=>{
try {
    
        const {token} = req.cookies
        if (!token) {
            throw new Error("Please Login First");
        }
        
        const decoded = jwt.verify(token, process.env.PrivateKey)
        const {id} = decoded;
        
        const user = await User.findOne({id})
        
        if (!user) {
            throw new Error("User not found");            
        }

        req.user = user
       next()

} catch (error) {
        console.log("Product Api Error : ", error );
        res.status(400).send("Product Api Error : ", error)
}
}

module.exports = {
    AuthMiddleware
}