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
        <input typd="password" name="pwd" placeholder="Enter Password"  required="required">
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
      var pwd  = post.pwd; // <input name 으로 찾기

      console.log(id , pwd);
      //DB 연결해서 확인하기 정책을 해야함

    });
  }else if(pathname === '/register'){
    var html = `<!doctype html>
    <html>
    <head>
    <title>OpenMajor Register</title>
    <meta charset="utf-8">
    </head>
    <body>

        <form  action="/register_process" method="post">
        <p>
        <label for="r1_1">
        <input type="radio" id="r1_1" name="r1" value="1">교수<br /></label>
        </p>
        <p>
        <label for="r1_2">
        <input type="radio" id="r1_2" name="r1" value="2">대학생<br /></label>
        </p>
        <p>
        <label for="r1_3">
        <input type="radio" id="r1_3" name="r1" value="3">일반<br /></label>
        </p>
        <p>
        <input type="submit">
        </p>
        </form>
        <pre id="log">
        </pre>

    </body>
    </html>`;

    response.writeHead(200);
    response.end(html);
  }else if(pathname === '/register_process'){
    var body = '';
    request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
            body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
    });

    request.on('end', function (){
      var post = qs.parse(body);
      console.log(post.r1);

      response.writeHead(200);
      response.end("checked");
    });

  }
  else{
      response.writeHead(404);
      response.end('Not found');
  }

}); // app

app.listen(4000);
