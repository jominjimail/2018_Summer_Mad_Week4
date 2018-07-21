var http = require('http');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request , response){
  var _url = request.url;
  var queryData = url.parse(_url , true).query;
  var pathname = url.parse(_url , true).pathname;
  console.log(queryData , pathname , queryData.id);

  if(pathname === '/'){

    if(queryData.id === undefined){
      //메인 페이지
      var html = `<!doctype html>
      <html>
      <head>
      <title>OpenMajor Welcome</title>
      <meta charset="utf-8">
      </head>
      <body>

      <h1><a href="/">Open Major</a></h1>
      <h1><a href="/login">로그인</a></h1>
      <h1><a href="/register">회원가입</a></h1>

      </body>
      </html>`;
      response.writeHead(200);
      response.end(html);
    }else{
      //메인 페이지 세분화 할때 필요함

    }
  }else if(pathname === '/login'){
    var html = `<!doctype html>
    <html>
    <head>
    <title>OpenMajor Login</title>
    <meta charset="utf-8">
    </head>
    <body>

    <form  action="/login_process" method="post">
        <p>
        <label for="id"><b>UserID</b></label>
        <input type="text" name ="id" placeholder="Enter ID" required="required">
        </p>
        <p>
        <label for="psw"><b>Password</b></label>
        <input typd="password" placeholder="Enter Password" name="pwd" required="required">
        </p>
        <p>
        <button type="submit">Login</button>
        </p>
    </form>

    </body>
    </html>`;
    response.writeHead(200);
    response.end(html);

  }else if(pathname === '/login_process'){
    var body = '';

    request.on('data' , function(data){
      body += data;
    });

    request.on('end' , function(){
      var post = qs.parse(body);

      var id = post.id;
      var pwd  = post.pwd;

      console.log(id , pwd);
      //DB 연결해서 확인하기 정책을 해야함

    });
  }else if(pathname === '/register'){
    var html = `<!doctype html>
    <html>
    <head>
    <title>OpenMajor Register</title>
    <meta charset="utf-8">

    <script type="text/javascript">
    <!--
    function check_only(chk){
        var obj = document.getElementsByName("chkbox");
        for(var i=0; i<obj.length; i++){
            if(obj[i] != chk){
                obj[i].checked = false;
            }
        }
    }
    //-->
    </script>

    </head>
    <body>

    <form  action="/register_process" method="post">
        <p>
        <label for="id"><b>교수</b></label>
        <input name="aaa" type="checkbox" value="1" onclick="check_only(this)"><br />
        </p>
        <p>
        <label for="id"><b>대학생</b></label>
        <input name="aaa" type="checkbox" value="2" onclick="check_only(this)"><br />
        </p>
        <p>
        <label for="id"><b>일반</b></label>
        <input name="aaa" type="checkbox" value="3" onclick="check_only(this)"><br />
        </p>
        <p>
        <button type="submit">Next</button>
        </p>
    </form>

    </body>
    </html>`;
    response.writeHead(200);
    response.end(html);
  }
  else{
      response.writeHead(404);
      response.end('Not found');
  }

}); // app

app.listen(4000);
