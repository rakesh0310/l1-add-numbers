const bodyParser = require('body-parser');
const express = require('express')

const app = express()

app.use(bodyParser.json())
// app.use(bodyParser.urlEncode(true))

app.post('/add', (req, res, next) => {
    if (req.headers['token']) {
        // token validation here
        next()
    } else {
        res.status(400).send({
            result: null,
            message: 'Authentication falied'
        })
    }
}, (req, res) => {
    let {number1, number2} = req.body
    if (typeof(number1) != 'number' || typeof(number2) != 'number') {
        return res.status(400).send({
            result: null,
            message: 'Validation Failed'
        })
    }
    let sum = number1 + number2
    res.status(200).send({
        result: sum,
        message: 'succesfull'
    })
});

app.listen(8000, () => {
    console.log("App Listening on Port", 8000)
})