//var http=require('http');
//var url=require('url');
var express=require('express');
//var fs=require('fs');
//var qs=require('querystring');
//var path = require('path');
//var nodemailer=require('nodemailer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());    

//var router = require('./routes/main.js')(app);

app.set('views', __dirname + '/static');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var session=require('express-session');
var MySQLStore=require('express-mysql-session')(session);

var bodyParser=require('body-parser');

var options={
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'doghoney',
	database: 'openmajor'
};

var sessionStore=new MySQLStore(options);

app.use(session({
	secret: '123fsdbgksdbjgdsksbgksdgd',
	resave: false,
	saveUninitialized: true,
	store: sessionStore
}));
	
var mysql=require('mysql');
var mysql_con=mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "doghoney",
	port: 3306,
	database: "openmajor"
});

mysql_con.connect(function(err){
		if(err){
			console.error('mysql connection error');
			console.error(err);
			throw err;
		}
});
	
app.get('/',function(req,res){
	res.render('login.html');
});

app.get('/signup',function(req,res){
    res.render('signup.html');
})

app.get('/login_success', function(req,res){
	res.render('main.html');
})

app.get('/logout', function(req, res){
	delete req.session.authId;
	req.session.save(function(){
		res.redirect('/');
	});
});

app.get('/login_failure', function(req, res){
	res.render('login.html');
});

app.get('/signup_failure', function(req, res){
	res.render('signup.html');
})

app.post('/signup_process', function(req, res){
		//res.send(req.body);
		var name=req.body.NAME;
		var userid=req.body.ID;
		var pwd=req.body.PWD;
		var email=req.body.EMAIL;
		var id_repeat_check_sql="SELECT * from practice where userid='"+userid+"'";

		mysql_con.query(id_repeat_check_sql, function(err, rows){
			if(err)
				throw err;
			//res.redirect('/signup_failure');
			// if(rows==null){
			// 	//res.redirect('/signup_failure');
			// }
			// else{
			var sql = "INSERT INTO practice (name, userid, password, email) values ('"+name+"', '"+userid+"' ,'"+pwd+"', '"+email+"')";
			mysql_con.query(sql, function(err, result){
					if(err)
						throw err;
					else{
						req.session.authId=userid;
						req.session.save(function(){
							res.redirect('/login_success');
						});
					}
					//console.log("1 record added");
					//res.render('main.html');
			});
			// }
		});
});

app.post('/login_process', function(req, res){
		var userid=req.body.ID;
		var pwd=req.body.PWD;

		var sql="select * from practice where userid = '"+userid+"' AND password = '"+pwd+"'";

		mysql_con.query(sql, function(err, rows, fields){
			if(err)
				throw err;
			if(rows=null)
				res.redirect('/login_failure');
			else{
				res.redirect('/login_success');
			}
		});

});

var _port = 3000;
app.listen(_port, function(){
	console.log('PORT: ' + _port);
});