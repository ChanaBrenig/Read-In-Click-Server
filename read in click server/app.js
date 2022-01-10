const express = require('express')
const app = express();
const mongoose = require('mongoose')
const env = require('dotenv')
env.config()
const usersRouter = require('./route/userRoute');
const insWordRoute = require('./route/insertWordRoute')
const getWordRoute = require('./route/getWordRoute')
const cors = require('cors')
app.use(cors())

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}

app.use(express.json())
app.use('/', usersRouter);
app.use('/insertWords', insWordRoute)
app.use('/getWords', getWordRoute)

console.log("hello===========");
// "mongodb+srv://Shani:sssnnn334@cluster0.3puzv.mongodb.net/Read-In-Click?retryWrites=true&w=majority"
//"mongodb://localhost:27017/Read-In-Click"
mongoose.connect("mongodb://localhost:27017/Read-In-Click", connectionParams)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log("error: " + err);
    })


app.listen(3001, (req, res) => {
    console.log('listen on port 3001');
})


module.exports = app;
