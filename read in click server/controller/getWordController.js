const mongoose = require('mongoose')
const word = require('../model/wordSchema')

const getWords = async (req, res) => {
    try {
        console.log('server success')
        console.log(req.params.kind)
        let words = await word.find({ kind: req.params.kind })
        console.log("w:"+words)
        res.send({ words })
        
    }
    catch(err){
        console.log(err)
        res.status(500).send('getWords failed')
    }
}


module.exports = { getWords }