const mongoose = require('mongoose');
const User = require('../model/userSchema')

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


// const jwt = require('jsonwebtoken');
// const createUser = asy0nc (req, res) => {
//     console.log("!!!!!");
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     let newUser = await new User(req.body)
//     await newUser.save(function (err, user) {
//         if (err)
//             res.status(400).send(err);
//         else

//             res.status(200).json({ userCB: user })
//     })
// }

const signInById = (req, res) => {
    console.log("#######signInById########");
    User.findOne({ userId: req.params.userId })
        .then((user) => {
            console.log('its good');
            res.status(200).json({ theUser: user })
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
}


module.exports = { signUp, signInById }