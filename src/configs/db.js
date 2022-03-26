const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://fahadalim:fahadalim@cluster0.txcj1.mongodb.net/authentication?retryWrites=true&w=majority")
}

module.exports = connect