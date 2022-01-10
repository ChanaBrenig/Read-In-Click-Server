const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const Word = require("../model/wordSchema")


// const insertKamatz = async (req, res) => {
//     try {
//         //word.update( { text : "aaa" }, { upsert : true } );

//         let kamatz = new Word(req.body)
//         // let chirik = new word("chirik", [])
//         await kamatz.save();
//         res.send("insert kamatz successfully")
//     }
//     catch{
//         res.send("error")
//     }
// }
const insertKamatz = async (req, res) => {
    try {
        let kamatz = new Word({
            "kind": "kamatz",
            "words": ["אף", "בד", "גב", "גג", "גל", "גן", "גס", "דל", "דף"
                , "דק", "זך", "חג", "חד", "חי", "חם", "טל", "טף", "כד"
                , "כף", "סל", "עם", "פג", "פך", "פס", "צו", "קו", "קל", "קש", "רך", "רץ", "שק", "הר",
                "כר", "מר", "פר", "צר", "קר", "רע", "שר", "פח", "צח", "בת", "מס", "רב", "שי", "צד"]
        })
        await kamatz.save();
        console.log("insert kamatz successfully")
        res.send("insert kamatz successfully")
    }
    catch{
        res.send("error")
    }
}
// const insertKamatz = (req, res) => {
//     console.log("inserKamatz function");
//     let kamatz = new Word({
//         "kind": "kamatz",
//         "words": ["אף", "בד", "גב", "גג", "גל", "גן", "גס", "דל", "דף"
//             , "דק", "זך", "חג", "חד", "חי", "חם", "טל", "טף", "כד"
//             , "כף", "סל", "עם", "פג", "פך", "פס", "צו", "קו", "קל", "קש", "רך", "רץ", "שק", "הר",
//             "כר", "מר", "פר", "צר", "קר", "רע", "שר", "פח", "צח", "בת", "מס", "רב", "שי", "צד"]
//     })
//     console.log("almost save.....");
//     kamatz.save()
//         // Word.updateOne({ text: kamatz }, { upsert: true })
//         .then((data) => {
//             console.log("save!!!!");
//             res.send("insert array kamatz successfully")
//         })
//         .catch((err) => {
//             res.send("error")
//         })
// }
const insertChirik = async (req, res) => {
    try {
        let chirik = new Word({
            "kind": "chirik",
            "words": ["גיל", "קיר", "גיר", "דיר", "שיר", "סיד", "מיץ", "עיר",
                "גיד", "ניר", "פיל", "דיר", "זיו", "טיט"]
        })
        await chirik.save();
        console.log("insert chirik successfully")
        res.send("insert chirik successfully")
    }
    catch{
        res.send("error")
    }
}

const insertCholam = async (req, res) => {
    try {
        let cholam = new Word({
            "kind": "cholam", "words": ["קול", "חול", "מור", "קור", "טוב", "חור", "אור",
                "בוץ", "קוץ", "חוף", "עוף", "שור", "חום", "יום", "גוי", "סוף"]
        })
        await cholam.save();
        console.log("insert cholam successfully")
        res.send("insert cholam successfully")
    }
    catch{
        res.send("error")
    }
}

const insertShuruk = async (req, res) => {
    try {
        let shuruk = new Word({
            "kind": "shuruk", "words": ["בור", "דוד", "חור", "אור", "צוף",
                "זוז", "סוד", "סוס", "בול", "שום"]
        })
        await shuruk.save();
        res.send("insert shuruk successfully")
    }
    catch{
        res.send("error")
    }
}
// const insertSegol = async (req, res) => {
//     try {
//         let segol = new word({ "kind": "segol", "words": ["כס", "שן", "הד", "עד"] })
//         await segol.save();
//         res.send("insert segol successfully")
//     }
//     catch{
//         res.send("error")
//     }
// }
const insertSegol = async (req, res) => {
    try {
        let segol = new Word({ "kind": "segol", "words": ["כס", "שן", "הד", "עד"] })
        await segol.save();
        console.log("insert segol successfully")
        res.send("insert segol successfully")
    }
    catch{
        res.send("error")
    }
}
// module.exports = { insertKamatz, insertChirik, insertCholam, insertShuruk, insertSegol }

const nisui = (req, res) => {
    console.log("nisui--------");

}
module.exports = { insertKamatz, insertChirik, insertCholam, insertShuruk, insertSegol }
