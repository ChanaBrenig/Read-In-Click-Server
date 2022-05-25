const mongoose = require('mongoose');
const userSchema = require('../model/userSchema');
const User = require('../model/userSchema')
var MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://localhost/Read-In-Click";//change localhost to srv1 in the seminar
var url = "mongodb://localhost:27017/";
const signUp = async (req, res) => {
    let myUser = await new User(req.body.user)
    console.log(myUser);
    myUser.save()

        .then((user) => {
            console.log(myUser);
            res.status(200).json({ userSignUp: user })
        }).catch((error) => {
            console.log(error);

            res.status(400).send(error);
        })
}




// const signInById = (req, res) => {
//     console.log("#######signInById########");
//     User.findOne({ userId: req.params.userId })
//         .then((user) => {
//             console.log('its good');
//              res.status(200).json({ theUser: user }).send();
        
//         })
//         .catch((error) => {
//             res.status(500).json({ error: error })
//         })
//    }
        
    


const signInById = (req, res)=>{
    var userId  = req.params.userId;
    var password = req.params.password;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Read-In-Click");
    var query = {userId, password};
    dbo.collection("users").find(query).toArray(function (err, result) {
      if (err) throw err;
   
      db.close();
    
    console.log( result);
    return res.json(result);
    //   } else {
       // return res.status(401).send();
     // }

})})
;
}










module.exports = { signUp, signInById}