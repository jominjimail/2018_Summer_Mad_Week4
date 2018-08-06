var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'doghoney',
  database : 'openmajor'
});

db.connect();

module.exports=db;
