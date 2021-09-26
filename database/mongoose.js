const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connect('mongodb://rpmeanstackdb:A97Z7boRTvhD78nyjDbTvX76wJEMKREL8byqpfgdwdufqSJLcrhJjOI2JvQNEM0zE0w8c1ApNpsURQulJBHZuA==@rpmeanstackdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@rpmeanstackdb@', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("DB Connected Sucessfully!")
    })
    .catch((error) => {
        console.log("Error occurred while DB connection", error)
    });

module.exports = mongoose;