//express_demo.js 文件
var express = require('express'); //引用express
var mongoose = require('mongoose');
var Test = require('./models/Test')
var router = require('./router')
var app = express(); //创建express实例
app.engine('html', require('express-art-template'))
app.use('/public/', express.static('./public'))
app.use(express.static('./node_modules'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(3000, function() { //应用启动端口为8081

    var host = server.address().address;
    var port = server.address().port;

    console.log(host, port)

});

app.use(router)