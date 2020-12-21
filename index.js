const express = require('express')
// var bodyParser = require('body-parser')
const timeout = require('connect-timeout')
const haltOnTimedout = require('./timeOut');

const app = express()
app.get('/save', [timeout(5000), haltOnTimedout], function (req, res, next) {
  savePost({hola: "hola"}, function (err, id) {
    try {
    console.log('req.timedout ', req.timedout)
    if (req.timedout) return
    res.status(200).send('saved as id ' + id)
    } catch (err) {
        
    }
  })
})

function savePost (post, cb) {
  setTimeout(function () {
    cb(null, ((Math.random() * 40000) >>> 0))
  }, 6000)
}

app.listen(3000, ()=>{
    console.log('app listen on port 3000');
})