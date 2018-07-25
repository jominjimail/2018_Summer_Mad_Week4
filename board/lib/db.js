var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '025987',
  database : 'openmajor'
});

db.connect();

module.exports=db;
