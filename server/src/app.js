const express = require('express');
const connectDb = require('./config/database');
const app = express();
const cookieParser = require('cookie-parser');
const { authRouter } = require('./router/auth.js');
const { userRouter } = require('./router/user.js');
const cors = require('cors')
const { adminRouter } = require('./router/admin.js')
const { productRouter } = require('./router/product.js');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
require('dotenv').config();

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter)
app.use('/product', productRouter)



connectDb().then(()=>{
    console.log("DataBase connected successfully");
    
    app.listen(3000, (req, res)=>{
        console.log("Server is running on 3000 port");
        })
        
}).catch((err)=>{
    console.log("DataBase Not Conected : ", err);
    
})