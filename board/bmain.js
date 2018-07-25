var express = require('express')
var app = express();
var http = require('http');
var url = require('url');
var qs = require('querystring');

var randstring=require('randomstring');
var smtpPool=require('nodemailer-smtp-pool');
var nodemailer=require('nodemailer');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var db = require('./lib/db');

var path = require('path');
var templateView =require('./lib/template.js');

var main=require('./lib/mainhtml.js');

var options={
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '025987',
	database: 'openmajor'
};

var session=require('express-session');
var MySQLStore=require('express-mysql-session')(session);
var sessionStore=new MySQLStore(options);

app.set('views', __dirname + '/static');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(session({
	secret: '123fsdbgksdbjgdsksbgksdgd',
	resave: false,
	saveUninitialized: true,
	store: sessionStore
}));

///////////////////////////////////////////////////////////////
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
app.get('/auth', function(req, res, next){
	let email=req.query.email;
	let code=req.query.code;

	var idt_sql="select * from practice where email='"+email+"' and code='"+code+"'";
	db.query(idt_sql, function(err, result){
		if(err)
			throw err;
		console.log(result);
		if(result.length!=0){

			var update=["Y", 1, code];
			var code_upt_sql="update practice set code=?, level=? where code=?";
			db.query(code_upt_sql, update, function(err, result){
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
	//req.session.authId=userid;
	req.session.save(function(){
		res.redirect('/home');
	});

	if(req.session.user){
		console.log('already logged in!!!!!!!!');
		res.send('already logged in.')
	}
	//res.render('main.html');
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

	db.query(idemail_repeat_check_sql, function(err, result){
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
			db.query(sql, function(err, result){
				if(err)
					throw err;
				else{

					var isCollegeEmail_sql="select name from college where domain='"+domain+"'";

					db.query(isCollegeEmail_sql, function(err, result){
						if(err)
							throw err;
						if(result.length!=0){
							var schoolname=result[0].name;
						 	var addschoolsql = "UPDATE practice set school='"+schoolname+"' where userid='"+userid+"'";

						 	db.query(addschoolsql, function(err, result){
						 		if(err)
						 			throw err;
						 		console.log(result);
						 	})
						}
						else{
							var noschool=[0, userid];
							var noschoolsql="UPDATE practice set level=? where userid=?";
							db.query(noschoolsql, noschool, function(err, result){
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

		db.query(sql, function(err, result){
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
///////////////////////////////////////////////////////////////












///////////////////////////////////////////////////////////////
app.get('/home', function(request, response) {
  //회원인지 아닌지 확인해주는 함수
  console.log(request.session.authId);

  var tablename = 'major_list'
  db.query(`SELECT * FROM ${tablename}` , function(error , result){
    if(error){
      throw error;
    }
    var html = main.html(main.list(result));
    response.send(html);
  })
});

app.get('/home/:Major', function(request, response){
  var Major = path.parse(request.params.Major).base;
  var html = main.Major(Major);
  response.send(html);

});
/*

app.get('/CSE', function(request, response){

});

*/

app.get('/home/:Major/:Major_board', function(request, response){
  console.log(request.session.authId);

  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;

  var tablename=`${Major}_${Major_board}`
  var path_herf=`/${Major}/${Major_board}`
  db.query(`SELECT * FROM ${tablename}` , function(error , result){
    if(error){
      throw error;
    }
    var list = templateView.list(result , path_herf);
    var html = templateView.frame(list , path_herf);
    response.send(html);
  })
});

app.get('/home/:Major/:Major_board/write', function(request, response){
  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;
  var path_herf=`/${Major}/${Major_board}/write`
  //여기 접근할때 아마 user 의 major 정보를 확인하고 접근권한같은거 추가할듯
  var html =templateView.writeform(path_herf);
  response.send(html);
});

app.post('/home/:Major/:Major_board/write_process', function(request, response){
	backURL=request.header('Referer') || '/';
	var body1=request.body;

	console.log('ffff?몸',body1);
	console.log('post 파싱 ',body1.title , body1.writer , body1.description);

  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;
  var tablename=`${Major}_${Major_board}`
  var redirect=`/home/${Major}/${Major_board}`
	var check = templateView.formCheck(body1);

	if(check != false){
      db.query(`INSERT INTO ${tablename} (title , description , created , author_id , views) VALUES (? , ? , NOW() , ? , ?)`,
      [body1.title , body1.description ,1, 1],
      function(error1 , result){
        if(error1){
          throw error1;
        }
        response.writeHead(302, {Location: `${redirect}`});
        response.end();
      })
		}else{
			response.redirect(backURL);
		}


});

app.get('/home/:Major/:Major_board/view/:viewId', function(request, response){
  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;
  var tablename=`${Major}_${Major_board}`
  var path_herf=`/${Major}/${Major_board}`
  var filteredId = path.parse(request.params.viewId).base;
  console.log(path_herf);

    //console.log(filteredId);
    db.query(`SELECT * FROM ${tablename}` , function(error , result){
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM ${tablename} WHERE id=?`,[filteredId] , function(error2 , result){
          if(error2){
            throw error2;
          }
          var id=result[0].id;
          var title = result[0].title;
          var description = result[0].description;
          var author_id=result[0].author_id;
          var date=result[0].created;
          var html =templateView.detailview(id , author_id , date , title , description , path_herf);
          response.send(html);
        })
  })//query
  //inner else
});

app.get('/home/:Major/:Major_board/update/:updateId', function(request, response){
  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;
  var tablename=`${Major}_${Major_board}`
  var path_herf=`/${Major}/${Major_board}`
  var filteredId = path.parse(request.params.updateId).base;
  if(filteredId === undefined){
    response.writeHead(200);
    response.end();
  }else{
    db.query(`SELECT * FROM ${tablename}` , function(error , result){
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM ${tablename} WHERE id=?`,[filteredId] , function(error2 , result){
          if(error2){
            throw error2;
          }
          var id=result[0].id;
          var title = result[0].title;
          var description = result[0].description;
          var author_id=result[0].author_id;
          var date=result[0].created;
          var html = templateView.updateview(id , author_id , title , description , path_herf);
          response.send(html);
        })
      })//query
  }//innerelse
});

app.post('/home/:Major/:Major_board/update_process', function(request, response){
	var body1=request.body;
	console.log(body1);
  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;
  var tablename=`${Major}_${Major_board}`
  var path_herf=`/${Major}/${Major_board}`

  var check = templateView.formCheck(body1);
  console.log('db 쿼리 완료?');

    if(check != false){
      db.query(`UPDATE ${tablename} set title=? , description=?, created=NOW() where id=?` ,
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
      //글쓰기 실패 즉 다시 ㄱㄱ , 생코에서 update하는거 참고하면 좋을듯
      response.writeHead(200);
      response.end("fail");
    }

});

app.post('/home/:Major/:Major_board/delete', function(request, response){
	var body1=request.body;
  var Major = path.parse(request.params.Major).base;
  var Major_board = path.parse(request.params.Major_board).base;
  var tablename=`${Major}_${Major_board}`
  var path_herf=`/${Major}/${Major_board}`

  var filteredId = body1.id;
    //user 가 이 게시글을 삭제할 권리가 있는지 체크가 필요하다.
  db.query(`DELETE FROM ${tablename} WHERE id=${filteredId}` , function(error , result){
      if(error){
        throw error;
      }
      response.writeHead(302, {Location: `/home${path_herf}`});
      response.end();
  })//query

});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!')
});



/*
var http = require('http');
var url = require('url');
var qs = require('querystring');
//var db = require('./lib/db');
var mysql = require('mysql');
var path = require('path');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '025987',
  database : 'madcamp'
});

db.connect();

var templateView =require('./lib/template.js');

var app = http.createServer(function(request , response){
  var _url = request.url;
  console.log('url@@   '+_url);
  var queryData = url.parse(_url , true).query;
  console.log(queryData);
  var pathname = url.parse(_url , true).pathname;
  console.log(pathname);

  if(pathname === '/'){

    }else{

    }
  }else if(pathname === '/CSE'){


  }else if(pathname === '/CSE/issue'){


  }else if(pathname === '/CSE/issue/write'){
    /

  }else if(pathname === '/CSE/issue/write_process'){

  }else if(pathname === '/CSE/issue/view'){

}else if(pathname === '/CSE/issue/update'){

else if(pathname === '/CSE/issue/update_process'){


}else if(pathname === '/CSE/issue/delete'){
  var tablename='cse_issue'
  var path_herf='/CSE/issue'
  var body = '';
  request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
          body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
  });

  request.on('end', function (){
    var post = qs.parse(body);
    var filteredId = post.id;
    //user 가 이 게시글을 삭제할 권리가 있는지 체크가 필요하다.
    db.query(`DELETE FROM ${tablename} WHERE id=${filteredId}` , function(error , result){
        if(error){
          throw error;
        }
        response.writeHead(302, {Location: `${path_herf}`});
        response.end();
      })//query
  });
}
  else{
      response.writeHead(404);
      response.end('Not founddfdfdf');
  }
}); // app

app.listen(4000, function() {
  console.log('Example app listening on port 4000!')
});
*/
