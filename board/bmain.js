var express = require('express')
var app = express()
var http = require('http');
var url = require('url');
var qs = require('querystring');
var db = require('./lib/db');

var path = require('path');
var templateView =require('./lib/template.js');


app.get('/', function(request, response) {
  var html = `<!doctype html>
  <html>
  <head>
  <title>OpenMajor Welcome!</title>
  <meta charset="utf-8">
  </head>
  <body>

  <h1><a href="/">Open Major</a></h1>
  <h1><a href="/CSE">CSE</a></h1>
  <h1><a href="/ELEC">ELEC</a></h1>

  </body>
  </html>`;
  response.send(html);
});

app.get('/CSE', function(request, response){
  var html = `<!doctype html>
  <html>
  <head>
  <title>OpenMajor CSE</title>
  <meta charset="utf-8">
  </head>
  <body>

  <h1><a href="/CSE/issue">main issue</a></h1>
  <h1><a href="/CSE/professor">CES Professor</a></h1>
  <h1><a href="/CSE/board">board</a></h1>

  </body>
  </html>`;
  response.send(html);

});
/*

app.get('/CSE', function(request, response){

});

*/

app.get('/CSE/issue', function(request, response){
  var tablename='cse_issue'
  var path_herf='/CSE/issue'

  db.query(`SELECT * FROM ${tablename}` , function(error , result){
    if(error){
      throw error;
    }
    var list = templateView.list(result , path_herf);
    var html = templateView.frame(list , path_herf);
    response.send(html);
  })
});

app.get('/CSE/issue/write', function(request, response){
  var path_herf='/CSE/issue/write'
  //여기 접근할때 아마 user 의 major 정보를 확인하고 접근권한같은거 추가할듯
  var html =templateView.writeform(path_herf);
  response.send(html);
});

app.post('/CSE/issue/write_process', function(request, response){
  var tablename='cse_issue'
  var redirect='/CSE/issue'
  var body = '';
  request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
          body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
  });
  request.on('end', function (){
    var post = qs.parse(body);
    console.log(post);
    var check = templateView.formCheck(post);

    if(check != false){
      // 여기서 DB 연결해서 list 추가해주면 될듯
      db.query(`INSERT INTO ${tablename} (title , description , created , author_id , views) VALUES (? , ? , NOW() , ? , ?)`,
      [post.title , post.description ,1, 1],
      function(error1 , result){
        if(error1){
          throw error1;
        }
        response.writeHead(302, {Location: `${redirect}`});
        response.end();
      })
    }else{
      //글쓰기 실패 즉 다시 ㄱㄱ , 생코에서 update하는거 참고하면 좋을듯
      response.send("fail");
    }
  });
});

app.get('/CSE/issue/view/:viewId', function(request, response){
  var tablename='cse_issue'
  var path_herf='/CSE/issue'
  var filteredId = path.parse(request.params.viewId).base;

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
          response.writeHead(200);
          response.end(html);
        })
  })//query
  //inner else
});

app.get('/CSE/issue/update/:updateId', function(request, response){
  var tablename='cse_issue'
  var path_herf='/CSE/issue'
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

app.post('/CSE/issue/update_process', function(request, response){
  var tablename='cse_issue'
  var path_herf='/CSE/issue'
  var body = '';
  request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
          body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
  });
  request.on('end', function (){
    var post = qs.parse(body);

    var id = post.id;
    var title = post.title;
    var description = post.description;

    var check = templateView.formCheck(post);

    if(check != false){
      db.query(`UPDATE ${tablename} set title=? , description=?, created=NOW() where id=?` ,
      [post.title , post.description , post.id],
      function(error2 , result){
        if(error2){
          throw error2;
        }
        response.writeHead(302, {Location: `${path_herf}/view/${post.id}`});
        response.end();
      }
    )//query

    }else{
      //글쓰기 실패 즉 다시 ㄱㄱ , 생코에서 update하는거 참고하면 좋을듯
      response.writeHead(200);
      response.end("fail");
    }
  });
});

app.post('/CSE/issue/delete', function(request, response){
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
