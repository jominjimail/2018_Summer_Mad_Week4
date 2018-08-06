//var http=require('http');
//var url=require('url');
var express=require('express');
//var fs=require('fs');
var http=require('http');
var qs=require('querystring');
var randstring=require('randomstring');
//var crypto=require('crypto');
var path = require('path');
var smtpPool=require('nodemailer-smtp-pool');
var nodemailer=require('nodemailer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
////////////
//var db=require('./lib/db');
var templateView=require('./lib/template.js');
////////////
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

var curruser={};

////////////////////////////

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
////////////////////////////////////////////////
app.get('/home', function(request, response){
	var inorout = request.session.authID;
	console.log(inorout);
	//console.log(curruser);

	if(!inorout){
		response.render('pleaselogin.html');	
	}else{
		var user_sql="SELECT practice.name, practice.major, practice.email, practice.school, practice.level from practice where userid=?"
	mysql_con.query(user_sql, inorout, function(err, rows){
		if(err){throw err;}
		console.log(rows[0].major);
		response.render('main.html', {test: ['화학','기계','신소재','전산','생화공','전자'],
		eng:['CHEM','ME','MSE','CS','CBE','EE'],
		info:[rows[0].name, rows[0].major, rows[0].email, rows[0].school, rows[0].level]});
	});

	}
});

app.get('/home/:Major', function(request, response){
 	var inorout = request.session.authID;
	console.log(inorout);
	if(!inorout){
		response.render('pleaselogin.html');
	}
	else{
		var majorstring=request.params.Major;
		console.log(majorstring);
		response.render('deptpage.html', {test: majorstring, eng:['핫이슈', '교수님', 'Q&A']});
   	}	
});

app.get('/home/:Major/:Major_board', function(request, response){
  	var inorout = request.session.authID;
	console.log(inorout);
	if(!inorout)
		response.render('pleaselogin.html');
	else{   
		//response.render('boardtest.html');
   		var Major = path.parse(request.params.Major).base;
   		var Major_board = path.parse(request.params.Major_board).base;

   		var tablename=`${Major}_${Major_board}`
   		var path_herf=`/${Major}/${Major_board}`

   		mysql_con.query(`SELECT bb.id, bb.title, bb.description, bb.created, bb.author_id, bb.views , uu.name
			FROM practice AS uu
			RIGHT JOIN ${tablename} AS bb
			ON bb.author_id = uu.id` , function(error, joinresult){
				if(error){
      	throw error;
    	}

     	var list = templateView.list(joinresult , path_herf);
     	var html = templateView.frame(list , path_herf);
     	response.send(html);
   		});
   }
});

app.get('/home/:Major/:Major_board/write', function(request, response){
   	var inorout = request.session.authID;
	console.log(inorout);
	if(!inorout)
		response.render('pleaselogin.html');
	else{
		var Major = path.parse(request.params.Major).base;
   		var Major_board = path.parse(request.params.Major_board).base;
   		var path_herf=`/${Major}/${Major_board}/write`
   		//여기 접근할때 아마 user 의 major 정보를 확인하고 접근권한같은거 추가할듯
   		if(curruser.major === Major){
			var html =templateView.writeform(path_herf);
	  		response.send(html);
		}else{
			var html=templateView.majordeny(Major, Major_board);
			response.send(html);
		}
	}
 });

app.post('/home/:Major/:Major_board/write_process', function(request, response){
    
    var inorout = request.session.authID;
	console.log(inorout);

	if(!inorout)
		response.render('pleaselogin.html');
	else{
		var backURL=request.header('Referer') || '/';
		var body1=request.body;
		var Major = path.parse(request.params.Major).base;
	    var Major_board = path.parse(request.params.Major_board).base;
	    var tablename=`${Major}_${Major_board}`
	    var redirect=`/home/${Major}/${Major_board}`
	    var check = templateView.formCheck(body1);

	if(check != false){
      	mysql_con.query(`INSERT INTO ${tablename} (title , description , created , author_id , views) VALUES (? , ? , NOW() , ? , ?)`,
      		[body1.title , body1.description ,curruser.id, 1], function(error1 , result){
        		if(error1)
          			throw error1;
        		response.writeHead(302, {Location: `${redirect}`});
        		response.end();
      			});
		}
	else{
			response.redirect(backURL);
		}
	}
});
	


app.get('/home/:Major/:Major_board/view/:viewId', function(request, response){
	var inorout = request.session.authID;
	console.log(inorout);
	if(!inorout)
		response.render('pleaselogin.html');
	else{
		var Major = path.parse(request.params.Major).base;
   		var Major_board = path.parse(request.params.Major_board).base;
   		var tablename=`${Major}_${Major_board}`
   		var path_herf=`/${Major}/${Major_board}`
   		var filteredId = path.parse(request.params.viewId).base;
   		console.log(path_herf);

     		//console.log(filteredId);
     	mysql_con.query(`SELECT bb.id, bb.title, bb.description, bb.created, bb.author_id, bb.views , uu.name FROM practice AS uu
	  				RIGHT JOIN ${tablename} AS bb ON bb.author_id = uu.id WHERE bb.id=?`,[filteredId] , function(error2 , joinresult){
	  					if(error2)
	    					throw error2;
    					var html =templateView.detailview(joinresult[0].id , joinresult[0].name , joinresult[0].created , joinresult[0].title , joinresult[0].description , path_herf);
    					response.send(html);
    				});
	}
});

app.get('/home/:Major/:Major_board/update/:updateId', function(request, response){
   			var inorout = request.session.authID;
			console.log(inorout);
			if(!inorout)
				response.render('pleaselogin.html');
			else{
				var Major = path.parse(request.params.Major).base;
			    var Major_board = path.parse(request.params.Major_board).base;
			    var tablename=`${Major}_${Major_board}`
			    var path_herf=`/${Major}/${Major_board}`
			    var filteredId = path.parse(request.params.updateId).base;

			    if(filteredId === undefined){
    				response.writeHead(200);
    				response.end();
  				}else{
    				mysql_con.query(`SELECT * FROM ${tablename}` , function(error , result){
        				if(error)
          					throw error;
        				mysql_con.query(`SELECT * FROM ${tablename} WHERE id=?`,[filteredId] , function(error2 , result){
          					if(error2)
            					throw error2;
							if(result[0].author_id === curruser.id){
							   var id=result[0].id;
							   var title = result[0].title;
							   var description = result[0].description;
							   var date=result[0].created;
							   var html = templateView.updateview(id , title , description , path_herf);
							   response.send(html);
							}else{
								var html=templateView.updatedeny(Major , Major_board , filteredId);
								response.send(html);
							}
        				});
      				});//query
  				}//innerelse
			}
});

app.post('/home/:Major/:Major_board/update_process', function(request, response){
			var inorout = request.session.authID;
			console.log(inorout);
			if(!inorout)
				response.render('pleaselogin.html');
			else{
				var body1=request.body;
			    var Major = path.parse(request.params.Major).base;
			  	var Major_board = path.parse(request.params.Major_board).base;
			  	var tablename=`${Major}_${Major_board}`
			  	var path_herf=`/${Major}/${Major_board}`

			  	var check = templateView.formCheck(body1);

			    if(check != false){
			      mysql_con.query(`UPDATE ${tablename} set title=? , description=?, created=NOW() where id=?` ,
			      [body1.title , body1.description , body1.id],
			      function(error2 , result){
			        if(error2){
			          throw error2;
			        }
			        response.writeHead(302, {Location: `/home${path_herf}/view/${body1.id}`});
			        response.end();
			      }
			    )//query

			    }else{
			      response.writeHead(200);
			      response.end("fail");
			    }
		    }

});

app.post('/home/:Major/:Major_board/delete', function(request, response){
		var inorout = request.session.authID;
			console.log(inorout);
			if(!inorout)
				response.render('pleaselogin.html');
			else{
				var body1=request.body;
		  		var Major = path.parse(request.params.Major).base;
		  		var Major_board = path.parse(request.params.Major_board).base;
			    var tablename=`${Major}_${Major_board}`
			    var path_herf=`/${Major}/${Major_board}`

			    var filteredId = body1.id;
				mysql_con.query(`SELECT * FROM ${tablename} WHERE id=?`,[filteredId] , function(error2 , result){
					if(error2){
						throw error2;
					}
					if(result[0].author_id === curruser.id){
						mysql_con.query(`DELETE FROM ${tablename} WHERE id=${filteredId}` , function(error , result){
					      if(error){
					        throw error;
					      }
					      response.writeHead(302, {Location: `/home${path_herf}`});
					      response.end();
					  })//query
					}else{
						var html=templateView.deletedeny(Major , Major_board , filteredId);
						response.send(html);
					}
				});
		}
});


/////////////////////////// /////////////////////////////////////////////////
	
app.get('/',function(req,res){// 로그인 화면
	console.log(curruser);
	console.log(req.session.authID);
	req.session.destroy(function(err){
		if(err)
			throw err;
		res.render('logintest.html');		
	});
});

app.get('/signup',function(req,res){ // 회원가입 버튼 클릭 시
	req.session.destroy(function(err){
		if(err)
			throw err;
		res.render('signuptest.html');	
	});
});

app.get('/auth', function(req, res, next){
	let email=req.query.email;
	let code=req.query.code;

	var first=email.indexOf("@");
	var sub=email.substring(first);
	var last=sub.indexOf(".");

	if(first==-1){
		res.render('invalidemail.html');
		return
	}

	console.log(sub.substring(1, last));
	var domain=sub.substring(1, last);

	if(email===curruser.EMAIL && code===curruser.code){
		var isCollegeEmail_sql="select name from college where domain='"+domain+"'";
		var newdatasql="INSERT INTO practice (name, userid, password, email ,school, major, level) values (?,?,?,?,?,?,?)";
		mysql_con.query(isCollegeEmail_sql, function(err, result){
	 		if(err)
	 			throw err;
			if(result.length!=0){
				var schoolname=result[0].name;
				var newstdlist=[curruser.NAME, curruser.ID, curruser.PWD, curruser.EMAIL, schoolname, curruser.job, 1];
				mysql_con.query(newdatasql, newstdlist, function(err, result){
					if(err){throw err;}
					console.log(result);
				});
			}
			else{
				var newnormallist=[curruser.NAME, curruser.ID, curruser.PWD, curruser.EMAIL, 'none', curruser.job, 0];
				mysql_con.query(newdatasql, newnormallist, function(err, result){
					if(err){throw err;}
					console.log(result);
				});
			}
			res.render('email_identification.html');
		});
	}
	else{
		res.render('idtfail.html');
	}
});

app.get('/logout', function(req, res){
	var sess=req.session;
	if(sess.authID){
		req.session.destroy(function(err){
			if(err)
				throw err;
			else{
				res.render('logoutalert.html');
				console.log(req.session);
			}
		});
	}
	else{
		res.render('pleaselogin.html');
	}
});

app.post('/signup_process', function(req, res){
	//res.send(req.body);
	// console.log(req.body);
	curruser=req.body;
	curruser.code=randstring.generate(16);
	console.log(curruser);

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
		res.render('invalidemail.html');
		return
	}

	console.log(sub.substring(1, last));
	var domain=sub.substring(1, last);
	var idlist=[userid];
	var emaillist=[email];

	var id_repeat_check_sql="SELECT * from practice where userid=?";
	var email_repeat_check_sql="SELECT * from practice where email=?";
	mysql_con.query(id_repeat_check_sql, idlist, function(err, result){
		if(err){throw err;}
		if(result.length!=0){
			res.render('existid.html');
			return
		}
		else{
			mysql_con.query(email_repeat_check_sql, emaillist, function(err, result){
				if(err)
					throw err;
				if(result.length!=0){
					res.render('existemail.html');
					return
				}
				else{
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
				  		text: "<html><a href='http://52.231.67.101:3000/auth/?email="+email+"&code="+curruser.code+" target='blank'>"+"인증하기</a></html>"
				  	};
					transporter.sendMail(mailOptions, function(error, info){
					    if (error) {console.log(error);} 
					    else {
					    	res.render('sendemail.html');
					    	console.log('Email sent: ' + info.response);
					    }
				  	});
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
			
			console.log(result.length);
			if(result.length==0){
				console.log('there is no valid ID-PW pair................');
				res.render('invalidid.html');
			
			}
			else{
				req.session.authID=userid;
				req.session.save(function(){
					var idlist=[userid];
					var userdata_sql="SELECT * FROM practice where userid=?"
					mysql_con.query(userdata_sql, idlist, function(err, rows){
							if(err) {throw err;}
							//console.log(result);
							curruser=rows[0];
							console.log(curruser);
							//console.log(curruser[0].userid);
					})
					//console.log(req.session);
					res.render('welcomemain.html');					
				});					
			}
		});
});

var _port = 3000;
app.listen(_port, function(){
	console.log('PORT: ' + _port +' has been connected.');
});
