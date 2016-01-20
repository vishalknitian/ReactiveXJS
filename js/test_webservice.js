// Node JS - Server Test

var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vishal$1',
    database: 'test'
});

connection.connect(function(err){
    if(err){
        console.log(err);
    }
});

app.get('/users/:id', function (req, res) {
    var query = connection.query("select * from test_table", function(err, rows){
        if(err){
            console.log(err);
        }
        res.end(JSON.stringify(rows));
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log("Example app listening at http://%s:%s", host, port)
});
