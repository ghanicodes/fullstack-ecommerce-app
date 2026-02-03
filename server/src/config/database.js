const mongoose = require('mongoose');

const connectDb = async ()=>{
    await mongoose.connect(`mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@cluster.7nsrqye.mongodb.net/${process.env.DbName}`)
}
module.exports = connectDb