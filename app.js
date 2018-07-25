//var http=require('http');
//var url=require('url');
var express=require('express');
//var fs=require('fs');
var qs=require('querystring');
var randstring=require('randomstring');
//var crypto=require('crypto');
//var path = require('path');
var smtpPool=require('nodemailer-smtp-pool');
var nodemailer=require('nodemailer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

var options={
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'doghoney',
	database: 'openmajor'
};

var session=require('express-session');
var MySQLStore=require('express-mysql-session')(session);
var sessionStore=new MySQLStore(options);

var mysql=require('mysql');
var mysql_con=mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'doghoney',
	database: 'openmajor'
});

mysql_con.connect(function(err){
		if(err){
			console.error('mysql connection error');
			console.error(err);
			throw err;
		}
		console.log('mysql connected!')
});

app.set('views', __dirname + '/static');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//var router = require('./routes/main.js')(app);

app.use(session({
	secret: '123fsdbgksdbjgdsksbgksdgd',
	resave: false,
	saveUninitialized: true,
	store: sessionStore
}));
	
app.get('/',function(req,res){ // 로그인 화면
	res.render('login.html');
});

app.get('/signup',function(req,res){ // 회원가입 버튼 클릭 시 
    //res.render('testJquery.html');
    res.render('signup.html');
})

app.get('/email_identification', function(req, res){
	res.render('email_identification.html');
})

// app.post('/sendemail', function(req, res){

// 	var email=req.body.email;
// 	console.log(email);

// 	let transporter = nodemailer.createTransport({
// 	    service: 'gmail',
// 	    auth: {
// 	      user: 'doghoneycheers@gmail.com',  // gmail 계정 아이디를 입력
// 	      pass: 'rltnsla1'          // gmail 계정의 비밀번호를 입력
// 	    }
//   	});

// 	let mailOptions = {
// 	    from: 'doghoneycheers@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
// 	    to: email,                     // 수신 메일 주소
// 	    subject: '안녕하세요, OpenMajor입니다. 이메일 인증을 해주세요.',
//   		text: '<p>아래의 링크를 클릭해주세요!</p>' + "<b><a href='http://52.231.67.101:3000/auth/?email="+ email +"&token=welcomeopenmajor'>인증하기</a></b>" 
//   	};

// 	transporter.sendMail(mailOptions, function(error, info){
// 	    if (error) {
// 	      console.log(error);
// 	    } else {
// 	      console.log('Email sent: ' + info.response);
// 	    }
//   	});

//   	res.send("send email");
// });

app.get('/auth', function(req, res, next){
	let email=req.query.email;
	let code=req.query.code;
	
	var idt_sql="select * from practice where email='"+email+"' and code='"+code+"'";
	mysql_con.query(idt_sql, function(err, result){
		if(err)
			throw err;
		console.log(result);
		if(result.length!=0){

			var update=["Y", 1, code];
			var code_upt_sql="update practice set code=?, level=? where code=?";
			mysql_con.query(code_upt_sql, update, function(err, result){
				if(err)
					throw err;
				console.log(result);
				res.send('university identification success!!!');
			});
		}
	})
})

app.get('/login_success', function(req,res){
	console.log(req.session);
	req.session.authId=userid;
	req.session.save(function(){
		res.redirect('/login_success');					
	});

	if(req.session.user){
		console.log('already logged in!!!!!!!!');
		res.send('already logged in.')
	}
	res.render('main.html');
	//console.log('login success!')
})

app.get('/logout', function(req, res){
	delete req.session.authId;
	req.session.save(function(){
		res.redirect('/');
	});
	console.log('logout.......bye........');
});

app.get('/login_failure', function(req, res){
	res.render('login.html');
	console.log('login failed!!!!!')
});

app.get('/signup_failure', function(req, res){
	res.render('signup.html');
	//res.send('duplicated ID!!!!!!!');
});

app.post('/signup_process', function(req, res){
		//res.send(req.body);
	console.log(req.body);

	var name=req.body.NAME;
	var userid=req.body.ID;
	var pwd=req.body.PWD;
	var email=req.body.EMAIL;
	var major=req.body.job;

	console.log(major);

	var first=email.indexOf("@");
	var sub=email.substring(first);
	var last=sub.indexOf(".");

	if(first==-1){
		res.send('please write an email correctly......!!!');
	}
	console.log(sub.substring(1, last));
	var domain=sub.substring(1, last);
	
	var idemail_repeat_check_sql="SELECT * from practice where userid='"+userid+"' or email='"+email+"'";

	mysql_con.query(idemail_repeat_check_sql, function(err, result){
		if(err){
			throw err;
		}
		console.log(result.length);
		if(result.length!=0){
			res.redirect('/signup_failure');
			console.log('Duplicated ID or EMAIL..............');
		}
		else{
			var code=randstring.generate(16);

			var sql = "INSERT INTO practice (name, userid, password, email, major, code) values ('"+name+"', '"+userid+"' ,'"+pwd+"', '"+email+"', '"+major+"', '"+code+"')";
			mysql_con.query(sql, function(err, result){
				if(err)
					throw err;
				else{

					var isCollegeEmail_sql="select name from college where domain='"+domain+"'";

					mysql_con.query(isCollegeEmail_sql, function(err, result){
						if(err)
							throw err;
						if(result.length!=0){
							var schoolname=result[0].name;
						 	var addschoolsql = "UPDATE practice set school='"+schoolname+"' where userid='"+userid+"'";

						 	mysql_con.query(addschoolsql, function(err, result){
						 		if(err)
						 			throw err;
						 		console.log(result);
						 	})
						}
						else{
							var noschool=[0, userid];
							var noschoolsql="UPDATE practice set level=? where userid=?";
							mysql_con.query(noschoolsql, noschool, function(err, result){
								if(err)
									throw err;
								console.log(result);
							});
						}

						let transporter = nodemailer.createTransport({
						    service: 'gmail',
						    auth: {
						      user: 'doghoneycheers@gmail.com',  // gmail 계정 아이디를 입력
						      pass: 'rltnsla1'          // gmail 계정의 비밀번호를 입력
						    }
					  	});

						let mailOptions = {
						    from: 'doghoneycheers@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
						    to: email,                     // 수신 메일 주소
						    subject: '안녕하세요, OpenMajor입니다. 이메일 인증을 해주세요.',
					  		text: "<html><a href='http://52.231.67.101:3000/auth/?email="+email+"&code="+code+" target='blank'>"+"인증하기</a></html>"
					  	};

						transporter.sendMail(mailOptions, function(error, info){
						    if (error) {
						      console.log(error);
						    } else {
						      console.log('Email sent: ' + info.response);
						    }
					  	});

					  	res.send("send email");
					})
					//var univcheck_sql="SELECT * from college where"
					
				}
			});
		}
	});
	
});

app.post('/login_process', function(req, res){
		var userid=req.body.ID;
		var pwd=req.body.PWD;

		var sql="select * from practice where userid = '"+userid+"' AND password = '"+pwd+"'";

		mysql_con.query(sql, function(err, result){
			if(err)
				throw err;
			//console.log(result);
			console.log(result.length);
			if(result.length==0){
				console.log('there is no valid ID-PW pair................');
				res.redirect('/login_failure');
			}
			else{
				req.session.authId=userid;
				req.session.save(function(){
					res.redirect('/login_success');					
				});
			}
		});

});

var _port = 3000;
app.listen(_port, function(){
	console.log('PORT: ' + _port +' has been connected.');
});
