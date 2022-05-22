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

const insertKamatzkamatz = async (req, res) => {
    try {
        let kamatz = new Word({
            "kind": "kamatzkamatz",
            "words": ["אבא", "שמר", "אמר", "גרר", "חלל", "גדל", "אגס", "ראה", "גדר"
                , "רקד", "שמי", "שמע", "שרה", "טרה", "תרה", "תלל", "קרע", "למד"
                , "צרח", "סלל", "אכל", "שתה", "ספג", "פרק", "טרק", "דגל", "שנה", "גבה", "זרק", "לחם", "שתק", "זחל",
                "עמד", "ברח", "פרח", "צרח", "קרא", "תבע", "שלח", "פחד", "צחה", "כלה", "חתן", "שבע", "גדש", "צדה"]
        })
        await kamatz.save();
        console.log("insert kamatz successfully")
        res.send("insert kamatz successfully")
    }
    catch{
        res.send("error")
    }
}

const insertchirikchirik = async (req, res) => {
    try {
        let chirikchirik = new Word({
            "kind": "chirikchirik",
            "words": ["השליך", "סיביר", "חיליק", "גיגית", "השלים", "הגדיל", "השליך", "הסדיר", "הקטין"
                , "הרקיד", "הבריא", "הנמיך", "הפחיד", "כסי", "דיני", "אתי", "אטי", "דגלי"
                , "עירי", "עתי", "גיסי", "פתי", "שירי", "ריבי", "קירי", "שישי", "גדי", "מילי", "ניני", "פיצי", "ציפי", "נימי",
                "חתי", "נסי", "זיוי", "גיטי", "גלי", "דילי", "חיני", "טלי", "מפי", "תיקי", "שיאי", "נבי", "ליבי", "מיהי"]
        })
        await chirikchirik.save();
        console.log("insert chirikchirik successfully")
        res.send("insert chirikchirik successfully")
    }
    catch{
        res.send("error")
    }
}

const insertsegolsegol = async (req, res) => {
    try {
        let segolsegol = new Word({
            "kind": "segolsegol",
            "words": ["אצא", "סבר", "חלק", "דלת", "ערב", "דגל", "רגל", "סגל", "פלא"
                , "דשא", "אשל", "תצא", "שזב", "כסא", "עדן", "כלב", "דרך", "ארך"
                , "ערך", "עצם", "לשם", "לחם", "אמת", "גחל", "תצא", "תשב", "אשב", "מלל", "טנא", "כפל", "חבל", "שצף",
                "קצף", "תלם", "זרי", "עיני", "לילי", "נצא", "חיני", "טלי", "עיני", "מימי", "נשב", "מלך", "עדי", "אילי"]
        })
        await segolsegol.save();
        console.log("insert segolsegol successfully")
        res.send("insert segolsegol successfully")
    }
    catch{
        res.send("error")
    }
}

const insertcholamcholam = async (req, res) => {
    try {
        let cholamcholam = new Word({
            "kind": "cholamcholam",
            "words": ["פולו", "אורו", "אותו", "לוטו", "דודו", "דוגלו", "דורו", "סולו", "סודו"
                , "זובו", "חוקו", "לועו", "רואו", "יויו", "כוחו", "קולו", "שורו", "כחות"
                , "עורות", "אורות", "הודו", "לווו", "צומו", "תורו", "חולו", "יולו", "גולו", "הונו", "טונו", "צאנו", "פונו", "רועו",
                "תוכו", "סודות", "לווות", "עונות", "צולות", "חונות", "גולות", "תולות", "עונות"]
        })
        await cholamcholam.save();
        console.log("insert cholamcholam successfully")
        res.send("insert cholamcholam successfully")
    }
    catch{
        res.send("error")
    }
}


const insertshurukshuruk = async (req, res) => {
    try {
        let shurukshuruk = new Word({
            "kind": "shurukshuruk",
            "words": ["שובו", "אצו", "אטו", "לוטו", "דודו", "דלו", "דורו", "סורו", "לוטו"
                , "זובו", "חוקו", "לועו", "רואו", "גוחו", "כלו", "קולו", "שורו", "קוחו"
                , "עורו", "דלו", "הודו", "לווו", "צומו", "תורו", "דנו", "יורו", "גולו", "הונו", "ענו", "צומו", "פונו", "רועו",
                "בוכו", "צוחו", "לווו", "עונו", "צלו", "שומו", "קוקו", "סתו", "דגו"]
        })
        await shurukshuruk.save();
        console.log("insert shurukshuruk successfully")
        res.send("insert shurukshuruk successfully")
    }
    catch{
        res.send("error")
    }
}

const insertkubutzkamatz = async (req, res) => {
    try {
        let kubutzkamatz = new Word({
            "kind": "kubutzkamatz",
            "words": ["שולם", "עולם", "חוקם", "לוטם", "דוקר", "נורה", "שומר", "סרם", "לוחם"
                , "גודל", "חולק", "כולם", "רוקד", "גולח", "בוקר", "שולח", "סולם", "סורם"
                , "כובה", "דלל", "שולק", "פוטר", "עונם", "סורה", "מוסר", "יורם", "גולן", "הונם", "עונם", "שודל", "בועה", "גולה",
                "סוכה", "קורה", "שולח", "יומל", "מוצל", "שומה", "כולה", "סורה", "תולה", "שורה"]
        })
        await kubutzkamatz.save();
        console.log("insert kubutzkamatz successfully")
        res.send("insert kubutzkamatz successfully")
    }
    catch{
        res.send("error")
    }
}

const insertkamatzcholam = async (req, res) => {
    try {
        let kamatzcholam = new Word({
            "kind": "kamatzcholam",
            "words": ["שדות", "נמות", "חלות", "לחות", "דקות", "מלות", "שמות", "סרות", "שמור"
                , "עצור", "אצות", "כלות", "רכות", "חמות", "קרות", "אמות", "לפות", "גדול"
                , "קמות", "דלות", "המות", "גדול", "באות", "שרות", "זכור", "הכל", "צחות", "מנות", "אחות", "פרות", "דשות", "גלות",
                "סכות", "קורה", "מכאן חולם ואחר כך קמץ או פתח", "שולה", "מורה", "מונה", "עונה", "גולה", "גולת", "יאמר"]
        })
        await kamatzcholam.save();
        console.log("insert kamatzcholam successfully")
        res.send("insert kamatzcholam successfully")
    }
    catch{
        res.send("error")
    }
}

const insertchiriksegol = async (req, res) => {
    try {
        let chiriksegol = new Word({
            "kind": "chiriksegol",
            "words": ["שימר", "נמנם", "קידש", "ציחק", "דילל", "מילל", "סיפר", "מילל", "פילל"
                , "גידל", "הילך", "מיהר", "דישש", "חימם", "לימד", "אימת", "ליפת", "מיצמץ"
                , "גילל", "שילם", "מינה", "כילה", "הביא", "זיקק", "הינה", "תילה", "ציחת", "נימת", "ליחח", "כילה", "דישש", "גילת",
                "ניפש", "ניצץ", "ניצת", "ניאש", "ביער", "סימר", "צימר", "כיער", "פיטר", "מירץ"]
        })
        await chiriksegol.save();
        console.log("insert chiriksegol successfully")
        res.send("insert chiriksegol successfully")
    }
    catch{
        res.send("error")
    }
}


const insertcholamshuruk = async (req, res) => {
    try {
        let cholamshuruk = new Word({
            "kind": "cholamshuruk",
            "words": ["הורו", "שומו", "הודו", "גלו", "דקו", "מלו", "שמו", "סורו", "צוחו"
                , "אצו", "כלו", "באו", "זרו", "כלו", "צרו", "רצו", "לפו", "תהו"
                , "בהו", "דלו", "המו", "באו", "שרו", "זכו", "דחו", "כתו", "צחו", "מנו", "פרו", "דשו", "גלו", "הומו",
                "בושו", "בזו", "יאבו", "תאבו", "מרו", "חונו", "עונו", "גולו", "תונו", "תאפו"]
        })
        await cholamshuruk.save();
        console.log("insert cholamshuruk successfully")
        res.send("insert cholamshuruk successfully")
    }
    catch{
        res.send("error")
    }
}

const insertmeorav = async (req, res) => {
    try {
        let meorav = new Word({
            "kind": "meorav",
            "words": ["הֻשְׁלְמָה", "הִמְרָה", "שָׁמְרָה", "לֻקְּחָה ", "מַשְׁלִים ", "צַעַד", "טָמוּן",
                "דּוּדִי", "דּוֹדָה"
                , "שֶׁלָּךְ", "מֵרַב", "אֻמַּן", "אֱמֶת", "קֶרֶשׁ", "עֵנָב", "יַיִן", "רָזֶה", "שֶׁמֶן"
                , "רוֹקֵעַ", "גָּחַן", "שֶׁפֶר", "חָמוּץ", "מָתוֹק", "גֶּרֶשׁ", "אִמָּא", "חַלּוֹן", "חֵלֶם",
                "הֻלֵּךְ", "גִּיגִית", "חַלָּה", "גָּדֵל", "עֶלֶם",
                "שָׁלֵם", "עוֹלָם", "שׁוֹמֵר", "שֶׁפֶךְ",
                "אוֹמֵר", "אָמוּר", "חַכֵּה", "מַשְׁפֵּךְ", "אֵמַר", "אֹמַר", "אָמַר", "אָמִיר",
                "פָּרֻשׂ", "זוֹחֵל", "פָּרַשׁ"
                , "פֵּרַשׂ", "פֹּרַשׂ", "הֵאִיץ", "פָּרָה", "חָתוּל", "תֹּאהַב", "רָזִים", "זֶרֶם", "זְרִים"
                , "זֵרִים", "זָרִים", "לֹחֵם", "לֵחָם", "לֶחָם", "לָחֶם", "לָחַם", "לֶחֶם", "בֹּרַךְ",
                "בֵּרַךְ", "בָּרֵךְ", "קָדֵשׁ", "סָמִיךְ", "כָּרִית",
                "חָלִיל", "חֵלִי", "חֲלַל"]
        })
        await meorav.save();
        console.log("insert meorav successfully")
        res.send("insert meorav successfully")
    }
    catch{
        res.send("error")
    }
}


const insertconsonant = async (req, res) => {
    try {
        let consonant = new Word({
            "kind": "consonant",
            "words": ["שֶׁמֵּעֵתָן", "פִּלְפְּלוּ", "הֵאִיצוּ", "הֶעֱרִיצוּ", "עֲקַלְקַלּוֹתָם", "יִשְׂרָאֵל", "צְבַרְתֶּם", "גְּבִירִים", "עֲשִׁירִים"
                , "אֶנְצִיקְלוֹפֶּדְיָה", "מִשְׁכַּנְתֶּם", "מִשְׁכְּנֹתָם", "אֲבָנִים", "חָלוּתָם", "חֲלוֹמוֹתֵיהֶם", "שִׂמְלֹתָם", "הֶעֱבִירוּ",
                "מִשְׁמֶרֶת", "מְשַׁמֶּרֶת", "מְשֻׁמֶּרֶת",
                "מִשֶּׁפַּכִּים", "מִשִּׁפְכֵי", "מַשְׁפְּכִים", "עֲלִיּוֹת", "יְרִידוֹת", "שֶׁלַּחֲנוּת", "שֶׁלַּחֲנוּת", "שָׁלַחְנוּ", "שֻׁלְחֲנוֹת",
                "מִכְתָּבִיּוֹת", "בַּקְבּוּקִים", "סִפְרִיּוֹת",
                "חֲנוּיוֹת", "תְּבִיעוֹת", "טוֹבוֹתָיו", "אֲבִיגַיִל", "מִשֶּׁמָּרוּתָם", "סַלְסָלָה", "מַחְשְׁבִים",
                "מְחַשְּׁבִים", "מֵחַשָּׁבִים", "מֻחְשָׁבִים", "מְחֻשָּׁבִים",
                "אֲמִירָה", "פִּיצוּצִים", "פִּצְפּוּצִים", "צִפְצוּפִים", "צְפִירוֹת", "בּוּעוֹתָיו", "גַּלְגַּלִּים", "דִּירוֹתָיו", "מְשַׁקְּפִים", "מְשַׁקְּפִים", "מִשְׁקָפִים", "מְשֻׁקָּפִים",
                "מְשַׁקְּפִים", "מֵעֶגְלַיִם", "מֵעַגָּלִים", "מַעְגָּלִים", "מִשְׁנָיוֹת",
                "כּוֹבָעִים", "כְּלֵילוֹתָיו", "בִּרְכוֹתָיו", "בְּרֵכוֹתָיו", "בִּרְכוֹתָיו", "בָּרַכּוֹתָיו",
                "מִקְלֶדֶת", "מַקְשִׁים", "מַקָּשִׁים", "רְקִיעִים", "דַּפְדֶּפֶת", "דִּפְדַּפְתָּ", "דִּפְדַּפְתְּ", "דֻּפְדַּפְתָּ", "דֻּפְדַּפְתְּ", "מַכְנִיסִים",
                "מִכְנָסַיִם", "מוֹצִיאִים", "מוֹצִיאוֹת", "מַכְנִיסוֹת"
            ]
        })
        await consonant.save();
        console.log("insert consonant successfully")
        res.send("insert consonant successfully")
    }
    catch{
        res.send("error")
    }
}

// שֶׁמֵּעֵתָן פִּלְפְּלוּ הֵאִיצוּ הֶעֱרִיצוּ עֲקַלְקַלּוֹתָם יִשְׂרָאֵל צְבַרְתֶּם גְּבִירִים עֲשִׁירִים
//  אֶנְצִיקְלוֹפֶּדְיָה מִשְׁכַּנְתֶּם מִשְׁכְּנֹתָם אֲבָנִים חָלוּתָם חֲלוֹמוֹתֵיהֶם שִׂמְלֹתָם הֶעֱבִירוּ 



module.exports = {
    insertKamatz, insertChirik, insertCholam, insertShuruk, insertSegol, insertKamatzkamatz, insertchirikchirik, insertsegolsegol,
    insertcholamcholam, insertshurukshuruk, insertkubutzkamatz, insertkamatzcholam,
    insertchiriksegol, insertcholamshuruk, insertmeorav, insertconsonant
}
