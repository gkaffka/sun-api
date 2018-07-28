var db = require('../db')
var ObjectID = require('mongodb').ObjectID;
const collection = db.get().collection('temperature')

function currentDate() {
    var dt = new Date()
    var utcDate = dt.toUTCString()
    return utcDate
}

exports.fetch = (req, res) => {
    collection.find().toArray((err, item) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' })
        } else {
            console.log(item)
            res.send(item)
        }
    });
}

exports.create = (req, res) => {
    const temperature = { temperature: req.body.temperature, date: currentDate() };
    collection.insert(temperature, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' })
        } else {
            res.send(result.ops[0])
        }
    });
}


