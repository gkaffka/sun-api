var db = require('../db')
var ObjectID = require('mongodb').ObjectID;
const collection = db.get().collection('sun')

exports.get = (req, res) => {
    console.log(db)
    const details = { '_id': new ObjectID('5b4a4f47e74e3f0cb4fa8dbb') };
    collection.findOne(details, (err, item) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(item);
        }
    });
}

exports.post = (req, res) => {
    const time = { sunrise: req.body.sunrise, sunrset: req.body.sunset };
    collection.insert(time, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(result.ops[0]);
        }
    });
}

exports.put = (req, res) => {
    const id = '5b4a4f47e74e3f0cb4fa8dbb';
    const details = { '_id': new ObjectID(id) };
    const time = { sunrise: req.body.sunrise, sunset: req.body.sunset };
    collection.update(details, time, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has occurred' });
        } else {
            res.send(time);
        }
    });
}
