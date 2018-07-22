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
      <title>OpenMajor Welcome!</title>
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
        <input typd="password" name="pwd" placeholder="Enter Password" required="required">
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
      var logincheck =0; // 이변수로 로그인 성공 여부 체크 : 성공이면 1 , 실패면 0 , 기본값 0
      var id = post.id;
      var pwd  = post.pwd;

      console.log(id , pwd);
      //DB 연결해서 확인하기 정책을 해야함
      //기수 오빠가 여기에다가 DB table 디져서 맞으면
      // logincheck=1; 이런식으로 파라미터 넘겨주면 될거 같아

      if(logincheck===1){ // 로그인 성공
        /*
        로그인을 성공했으면 해당 DB table 에 있는 음 학교 정보라든가
        이름, 학생인지 교사인지 이메일 등등 이런 기본 정보를 한꺼번에 불러와서
        모듈? 객체가 더 와닿으려나 암튼 그 태호가 준 파일
        project2 / server / models / user.js 이 부분 참고해서 처리하면 좋을거 같앙
        models / user.js 파일은 미리 추가했어!!
        */
        response.writeHead(302, {Location: `/`}); // 일단 성공하면 메인으로 이동 나중에는 사용자 이름이랑 학교 정보 받아와서 메인 상단에 노출시킬예정
        response.end('access sucess');
      }else if(logincheck===0){ // 로그인 실패
        response.writeHead(302, {Location: `/login`}); // 일단 다시 로그인 창으로 이동 나중에는 다시 로그인 해주라는 경고창을 추가할 예정
        response.end('access sucess login fail');
      }

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
