const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connect('mongodb://rpmeanstackdb:aYMuXWKVzWh2Zas7tBgIm2FMYvaOjSnqcfsZ2rMUNQi2Kirp2H5r2H5eEuJ4NrWR2vyygXRAIXuzyNszUiJ8tw==@rpmeanstackdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@rpmeanstackdb@', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("DB Connected Sucessfully!")
    })
    .catch((error) => {
        console.log("Error occurred while DB connection", error)
    });

module.exports = mongoose;