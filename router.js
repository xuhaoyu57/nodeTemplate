var express = require('express');
var router = express.Router();
var Test = require('./models/Test');
app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/test', function(req, res) {
    res.render('test.html');
});
app.post('/Test', function(req, res) {
    new Test(req.body).save(function(err,data) {
        if (err) {
            res.send({
            	status:400,
            	errMsg:err
            }) //400表示出错
        } else {
            res.send({
				status:200,
				data:data
            }) //200表示成功
        }
    })
});
app.get('/testData', function(req, res) {
    Test.find().then(function(data) {
        res.json(data)
    })
})


module.exports = router